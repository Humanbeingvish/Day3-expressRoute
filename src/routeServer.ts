import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Custom middleware with explicit types
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Apply middleware
app.use(requestLogger);

// Define routes
app.get('/about', (req: Request, res: Response) => {
    res.send("This is the About page.");
});

app.get('/contact', (req: Request, res: Response) => {
    res.send("This is the Contact page.");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

