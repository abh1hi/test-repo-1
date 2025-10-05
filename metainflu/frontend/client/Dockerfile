# Use a Node.js base image suitable for development
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, etc.)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose the port that Vite runs on
EXPOSE 5173

# The command to start the Vite development server, listening on all interfaces
CMD ["npm", "run", "dev"]
