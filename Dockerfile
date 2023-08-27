FROM node:14

WORKDIR /Users/Dell/Documents/learnN/NodeJs/FileInfo/FileInfo-RapidFort

COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Specify the command to start your app
CMD ["node", "index.js"]