import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
const route = Router();

const continents = [
    {
        id: 1,
        name: "Asia",
        population: "4,624,520,000",
        no_of_countries: 50,
        area: "44,579,000"
    },
    {
        id: 2,
        name: "Africa",
        population: "1,327,042,300",
        no_of_countries: 54,
        area: "30,370,000"
    },
    {
        id: 3,
        name: "North America",
        population: "590,176,500",
        no_of_countries: 23,
        area: "24,709,000"
    },
    {
        id: 4,
        name: "South America",
        population: "429,276,300",
        no_of_countries: 12,
        area: "17,840,000"
    },
    {
        id: 5,
        name: "Antartica",
        population: "No real data on populants",
        no_of_countries: 0,
        area: "14,000,000"
    },
    {
        id: 6,
        name: "Europe",
        population: "747,447,200",
        no_of_countries: 51,
        area: "10,180,000"
    },
    {
        id: 7,
        name: "Australia",
        population: "42,448,700",
        no_of_countries: 14,
        area: "8,600,000"
    }
];

export default (app: Router) => {
    app.use('/continents', route);

    route.get('', (req: Request, res: Response) => {
        return res.send(continents);
    });
};