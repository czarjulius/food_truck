import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
const fs = require('fs');
import path from 'path';
import { parse } from 'csv';

import createError from './helpers/createError';
import { RESPONSE } from './constants/enums';

const app = express();

app.use(cors() as any);
app.use(helmet() as any);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();

// For health checks
apiRouter.get('/', (_, res) => {
  res.status(200).json({
    status: RESPONSE.SUCCESS,
    message: 'Service up and running..',
    data: null,
  });
});
const csvFilePath = path.join(__dirname, '../data.csv');

let foodData;

export const extractCsvData = async () => {
  try {
    foodData = [];

    fs.createReadStream(csvFilePath)
      .pipe(
        parse({
          columns: true,
        })
      )
      .on('data', async (data) => {
        foodData.push(data as never);
      })
      .on('error', async (error) => {
        console.log(error, '????');
      })
      .on('end', () => {
        return foodData;
      });
  } catch (error) {
    console.log(error);
  }
};

apiRouter.get('/data', async (req, res) => {
  try {
    const { vendor, address, fooditems, zipcodes, page = 1, limit = 10, facilitytype } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    let filteredData = foodData.filter((item) => {
      return (
        (!vendor || item.Applicant.toLowerCase().includes(vendor.toLowerCase())) &&
        (!address || item.Address.toLowerCase().includes(address.toLowerCase())) &&
        (!fooditems || item.FoodItems.toLowerCase().includes(fooditems.toLowerCase())) &&
        (!zipcodes || item['Zip Codes'].includes(zipcodes)) &&
        (!facilitytype || item['FacilityType'].includes(facilitytype))
      );
    });

    if (!vendor && !address && !fooditems && !zipcodes) {
      filteredData = foodData;
    }

    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = startIndex + limitNumber;

    const paginatedResult = filteredData.slice(startIndex, endIndex);

    const result = paginatedResult?.map((vendor) => ({
      lat: Number(vendor?.Latitude),
      lng: Number(vendor?.Longitude),
      name: vendor?.Applicant,
      facilityType: vendor?.FacilityType,
      locationDescription: vendor?.LocationDescription,
      address: vendor?.Address,
      status: vendor?.Status,
      schedule: vendor?.Schedule,
      dayshours: vendor?.dayshours,
      approved: vendor?.Approved,
      expirationDate: vendor?.ExpirationDate,
      foodItems: vendor?.FoodItems,
      zipCodes: vendor?.['Zip Codes'],
    }));

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / limitNumber);
    const hasPrevious = pageNumber > 1;
    const hasNext = pageNumber < totalPages;

    res.status(200).json({
      status: 'SUCCESS',
      message: 'Data fetched successfully!',
      data: result,
      currentPage: pageNumber,
      totalPages: totalPages === 0 ? 1 : totalPages,
      totalItems: totalItems,
      hasPrevious: hasPrevious,
      hasNext: hasNext,
    });
  } catch (error) {
    console.log(error);
  }
});

// handler for route-not-found
apiRouter.use((_req: Request, _res: Response, next) => {
  next(
    createError(404, {
      status: RESPONSE.ERROR,
      message: 'Route not found',
      data: null,
    })
  );
});

// error handler for api router
apiRouter.use((error: any, _req: Request, res: Response, _next: Function) => {
  if (!error.status) {
    error = createError(500, {
      message: 'Internal Server Error',
      data: error.toString(),
    });
  }

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    data: error.data,
    // stack: error.stack,
  });
});

const apiURL = '/';

app.use(apiURL, apiRouter);

export default app;
