import "dotenv/config";

import Express from "express";
import cors from "cors";
import { logger } from "@/utils/logger";
import helmet from "helmet";
import userRoutes from "@/routes/userRoutes";
import movieRoutes from "@/routes/movieRoutes";

const app = Express();
const PORT = process.env.PORT || 5000;
const API_VERSION = "/api/v1";

app.use(Express.json());
app.use(helmet());
app.use(cors());

app.use(API_VERSION + "/users", userRoutes);
app.use(API_VERSION + "/movies", movieRoutes);

logger.info('Server is starting...');
app.listen(PORT, () => {
logger.info({ port: PORT }, 'Server is running');
});