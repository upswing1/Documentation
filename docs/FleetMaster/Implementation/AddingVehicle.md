# Add Vehicle Mechanism

## Overview

This document outlines the high-level workflow for adding a vehicle to our fleet management system using FleetMaster and describes the interaction between the FleetMaster app and the server. The workflow involves various steps to ensure a secure and efficient process for adding vehicles, detailing the responsibilities of the administrator and the expected server responses. It also highlights how drivers can contribute to maintaining accurate vehicle records through daily log entries, fuel entries, incident reports, vehicle inspections, and maintenance requests.

### Step 1: Administrator Submits Basic Vehicle Information

- **Administrator Action:** The administrator fills out a form with basic vehicle information.
- **Basic Information Presented:**
  - Vehicle Identification Number (VIN)
  - Make
  - Model
  - Year of Manufacture
  - License Plate Number
  - Vehicle Type (e.g., Car, Truck, Van)
  - Acquisition Date
  - Current Mileage
  - Fuel Type (e.g., Gasoline, Diesel, Electric)
  - Assigned Driver (optional)
- **Submission:** The administrator submits the form to the server.

### Step 2: Server Validates Data

- **Server Action:** The server receives the data and performs validation checks.
  - **Validation Checks:**
    - Ensures all required fields are filled.
    - Confirms the VIN is unique and not already in the system.
- **Database Update:** If validation is successful, the server updates the database with the new vehicle information.
- **Response:** The server sends a confirmation response back to the FleetMaster. If validation fails, an error message is returned.

### Step 3: Datatable Update

- **FleetMaster Action:** The datatable or other relevant UI component is updated with the new vehicle data, reflecting the changes made.

### Step 4: Upload Additional Documents

- **Administrator Action:** The administrator uploads additional documents to the vehicle's record.
  - **Types of Documents:**
    - Vehicle registration documents
    - Insurance papers
    - Maintenance records
    - Photos of the vehicle
- **Submission:** The administrator submits these documents to the server.

### Step 5: Server Saves Documents

- **Server Action:** The server saves the uploaded documents to the database.
- **Response:** The server sends a confirmation response back to the FleetMaster.

### Step 6: Datatable Update

- **FleetMaster Action:** The datatable or other relevant UI component is updated with the new document information.

### Step 7: Enter Maintenance Records

- **Administrator Action:** The administrator enters maintenance records for the vehicle.
  - **Maintenance Information:**
    - Date of maintenance
    - Type of maintenance performed
    - Details of the work done
    - Cost of maintenance
- **Submission:** The administrator submits the maintenance records to the server.

### Step 8: Fleet Assignment and Telematics Device

- **Fleet Assignment:**
  - **Administrator Action:** The administrator assigns the vehicle to a specific fleet.
  - **Submission:** The administrator submits the fleet assignment to the server.
  - **Server Action:** The server updates the database with the fleet assignment and confirms the update.
- **Telematics Device Assignment:**
  - **Optional Step:** If the vehicle requires a telematics device, the administrator assigns one.
  - **Submission:** The administrator submits the telematics device assignment to the server.
  - **Server Action:** The server updates the database with the telematics device information and confirms the update.

## Tasks that a Driver Can Perform to Add Information to the Vehicle

1. **Daily Log Entries:**
   - **Task:** Drivers can enter daily logs or trip reports.
   - **Details:**
     - Date and time of the trip
     - Starting and ending locations
     - Mileage covered
     - Any incidents or issues encountered

2. **Fuel Entries:**
   - **Task:** Drivers can log fuel entries.
   - **Details:**
     - Date and time of refueling
     - Amount of fuel added
     - Cost of fuel
     - Odometer reading at the time of refueling

3. **Incident Reports:**
   - **Task:** Drivers can report incidents or issues.
   - **Details:**
     - Date and time of the incident
     - Description of the incident
     - Photos or documents related to the incident
     - Any immediate actions taken

4. **Vehicle Inspections:**
   - **Task:** Drivers can perform and log vehicle inspections.
   - **Details:**
     - Date and time of the inspection
     - Checklist of items inspected
     - Notes on any issues found
     - Photos of any damage or issues

5. **Maintenance Requests:**
   - **Task:** Drivers can submit maintenance requests.
   - **Details:**
     - Date and time of the request
     - Description of the issue
     - Urgency level
     - Any preliminary actions taken by the driver
