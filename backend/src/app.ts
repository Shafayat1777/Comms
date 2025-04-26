import express, { Application } from "express";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swaggerConfig";
import cookieParser from "cookie-parser";
import session from "express-session";
import  http  from "http";
import cors from "cors";
import { Server as Socket } from "socket.io";
const app: Application = express();


// !!!!!!!!! NEED FXING !!!!!!!!!!!!!!!
// * need to fix this. session.d.ts is not working
// * so, I have to add this manually
declare module "express-session" {
  interface SessionData {
    user?: string;
  }
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Routes
app.use("/api", router);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const server = http.createServer(app);
const io = new Socket(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('joinRoom', ({chatId, user}) => {
    socket.join(chatId);
    console.log(`User ${user} joined room: ${chatId}`);

    // Notify others in the room
    socket.to(chatId).emit('chat', {content:`User ${user} joined ${chatId}`, senderId: user, type: 'join'});
  });

  socket.on('sendMessage', ({ chatId, content, senderId }) => {
    io.to(chatId).emit('chat', {content, senderId: senderId, type: 'message'});
    console.log(`User ${socket.id} sent message: ${content} in room: ${chatId}`);
  });
});

export default server;
