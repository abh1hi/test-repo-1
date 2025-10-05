# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install any needed packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend directory
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define the command to run the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
