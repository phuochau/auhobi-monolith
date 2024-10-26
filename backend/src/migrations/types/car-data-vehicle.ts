export interface CarDataVehicle {
    name: string
    brandName: string
    startYear: number
    endYear: number
    description: string
    images: string[]
    tech: Tech[]
    options: Option[]
    sizes: Size[]
    ref: string
}

export interface Tech {
    title: string
    features: TechFeatures
}

export interface TechFeatures {
    "Price"?: string
    "New Price Roadworthy"?: string
    "Road Tax / 3 Months"?: string
    "Body Type"?: string
    "Transmission"?: string
    "Number Of Seats"?: string
    "Segment"?: string
    "Introduction"?: string
    "End"?: string
    "Drive Wheel "?: string
    "Engine/motor Type"?: string
    "Fuel Type"?: string
    "Power"?: string
    "Total Max. Power (kW)"?: string
    "Total Max. Power (hp)"?: string
    "Max Torque"?: string
    "Cylinders"?: string
    "Valves Per Cylinder"?: string
    "Engine Capacity"?: string
    "Bore X Stroke"?: string
    "Compression Ratio"?: string
    "Max Power"?: string
    "Power (kW)"?: string
    "Power (hp)"?: string
    "Max. Power Rpm"?: string
    "Max Torque Rpm"?: string
    "Fuel System"?: string
    "Valve Actuation"?: string
    "Turbo"?: string
    "Catalyst"?: string
    "Fuel Tank Capacity"?: string
    "Top Speed"?: string
    "Acceleration 0-100 Km / H"?: string
    "Practice Consumption Monitor"?: string
    "Urban Consumption"?: string
    "Extra-urban Consumption"?: string
    "Combined Consumption"?: string
    "Co2 Emissions"?: string
    "Energy Label"?: string
    "Power Consumption"?: string
    "Battery Range"?: string
    "Low Consumption"?: string
    "Medium Consumption"?: string
    "High Consumption"?: string
    "Very High Consumption"?: string
    "Front Suspension"?: string
    "Rear Suspension"?: string
    "Front Stabilizer"?: string
    "Rear Stabilizer"?: string
    "Front Brakes"?: string
    "Rear Brakes"?: string
    "Front Tire Size"?: string
    "Rear Tire Size"?: string
    "Turning Circle"?: string
    "1st Gear"?: string
    "2nd Gear"?: string
    "3rd Gear"?: string
    "4th Gear"?: string
    "5th Gear"?: string
    "6th Gear"?: string
    "7th Gear"?: string
    "8th Gear"?: string
    "9th Gear"?: string
    "Reverse Gear"?: string
    "Final Drive"?: string
    "Rpm At 120 Km/h (theoretical)"?: string
}

export interface Option {
    title: string
    features: OptionFeatures
}

export interface OptionFeatures {
    "Crash Test Result"?: string
    "ABS"?: string
    "Brake Force Distribution"?: string
    "Brake Assist"?: string
    "Emergency Braking Assistance"?: string
    "Blind Spot Assist"?: string
    "Stability Control"?: string
    "Traction Control"?: string
    "Limited Slip Differential"?: string
    "Driver's Airbag"?: string
    "Passenger Airbag"?: string
    "Side Airbags"?: string
    "Head / Curtain Airbags"?: string
    "Driver's Knee Airbag"?: string
    "Hill Assist"?: string
    "Lane Assist"?: string
    "Blind Spot Assistant"?: string
    "Fatigue Sensor"?: string
    "Tire Pressure Sensor"?: string
    "City ??safety System"?: string
    "Night Vision With Person Recognition"?: string
    "Precrash System"?: string
    "High Beam Assistant"?: string
    "Traffic Sign Recognition"?: string
    "Collision Warning System"?: string
    "Automatic Level Control"?: string
    "Central Door Locking"?: string
    "Keyless Entry/start"?: string
    "Start Button"?: string
    "Control Circuit"?: string
    "Electric Windows"?: string
    "Power Steering"?: string
    "Cruise Control"?: string
    "Air Conditioning"?: string
    "Left/right Temperature Control"?: string
    "Parking Sensors"?: string
    "Reverse Camera"?: string
    "Parking Machine"?: string
    "Electric Parking Brake"?: string
    "Start / Stop System"?: string
    "Height Adjustment Seat"?: string
    "Lumbar Support Seat"?: string
    "Electric Adjustment Seat"?: string
    "Heated Seats"?: string
    "Ventilated Seats"?: string
    "Sports Seats"?: string
    "Leather Covered Steering Wheel"?: string
    "Adjustable Steering Wheel"?: string
    "Heated Steering Wheel"?: string
    "Leather Upholstery"?: string
    "Rear Headrests"?: string
    "Folding Rear Seats"?: string
    "Sliding Rear Seat"?: string
    "Center Armrest"?: string
    "Automatically Dimming Interior Mirror"?: string
    "Reading Lamp(s)"?: string
    "Illuminated Makeup Mirror"?: string
    "Adjustable Dashboard Lighting"?: string
    "Tachometer"?: string
    "Day Counter"?: string
    "Cooling Water Temperature Gauge"?: string
    "Outside Temperature Gauge"?: string
    "Board Computer"?: string
    "Audio System"?: string
    "Digital Radio (DAB)"?: string
    "Steering Wheel Controls For Audio"?: string
    "Audio Input"?: string
    "Navigation System"?: string
    "Bluetooth"?: string
    "Interval Wiper (s)"?: string
    "Alloy Wheels"?: string
    "Sliding / Tilting Roof"?: string
    "Panoramic Roof"?: string
    "Roof Rails"?: string
    "Metallic Paint"?: string
    "Painted Bumpers"?: string
    "Tinted Glass"?: string
    "Rear Privacy Glass"?: string
    "Electric Mirrors"?: string
    "Folding Exterior Mirrors"?: string
    "Automatically Dimming Exterior Mirrors"?: string
    "Direction Indicator In Exterior Mirrors"?: string
    "Front Fog Lights"?: string
    "Automatically Switching On Lighting"?: string
    "Xenon Headlights"?: string
    "Led Headlights"?: string
    "LED Rear Lighting"?: string
    "Daytime Running Lights"?: string
    "Headlamp Washers"?: string
    "Burglar Alarm"?: string
    "Service"?: string
    "General Warranty"?: string
    "Body Warranty"?: string
    "New Price Tax"?: string
    "New Price Roadworthy"?: string
    "New Price 2019"?: string
    "New Price 2018"?: string
    "New Price 2017"?: string
    "New Price 2016"?: string
    "Occasion Price 2019"?: string
    "Occasion Price 2018"?: string
    "Occasion Price 2017"?: string
    "Occasion Price 2016"?: string
    "4 Years Depreciation"?: string
    "Motor Vehicle Tax"?: string
    "Insurance"?: string
    "Fuel Costs"?: string
    "Maintenance"?: string
    "Total Costs"?: string
    "Total Costs Per Kilometer"?: string
}

export interface Size {
    title: string
    features: SizeFeatures
}

export interface SizeFeatures {
    "Curb Weight"?: string
    "Max. Payload"?: string
    "Max. Permissible Mass"?: string
    "Max. Front Axle Mass"?: string
    "Max. Rear Axle Mass"?: string
    "Max. Braked Trailer Mass"?: string
    "Max. Unbraked Trailer Mass"?: string
    "Max. Nose Weight"?: string
    "Max. Roof Load"?: string
    "Cargo Capacity"?: string
    "Length Min./max."?: string
    "Width Min./max."?: string
    "Height"?: string
    "Height Of Lift Threshold"?: string
    "Length"?: string
    "Width"?: string
    "Wheelbase"?: string
    "Front Track Width"?: string
    "Rear Track Width"?: string
    "Ground Clearance"?: string
    "Distance Backrest / Pedals"?: string
    "Front Headroom"?: string
    "Front Backrest Length"?: string
    "Front Seat Length"?: string
    "Front Entry Height"?: string
    "Front Interior Width"?: string
    "Distance Backrest Front / Rear"?: string
    "Avg. Distance Backrest Front / Rear"?: string
    "Rear Headroom"?: string
    "Backrest Length"?: string
    "Rear Seat Length"?: string
    "Rear Seat Height"?: string
    "Rear Interior Width"?: string
}
