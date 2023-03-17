const corsOptions = {
    origin: 'http://example.com', // allow requests from example.com
    optionsSuccessStatus: 200 // return 200 for preflight requests
};

app.use(cors(corsOptions));