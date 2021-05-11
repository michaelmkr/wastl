//INPUT
int slider1 = A0; //Analog 0
int lampTemp = A1; //Analog 1
int switch1 = A3; //Analog 3  

//OUTPUT
int pwmLampe = 9; //Digital 7
int green = 2; //Digital 0
int yellow = 8; //Digital 6
int red = 4; //Digital 2

//variables
bool stateSwitch1;
int valueSlider1;
int valuelampTemp;
int mapValueSlider1 = 0;
int mapValuelampTemp = 0;

void setup() {
  //OUTPUT
  pinMode(pwmLampe, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(red, OUTPUT);

  //INPUT
  pinMode(slider1, INPUT);
  pinMode(lampTemp, INPUT);
  pinMode(switch1, INPUT);

  Serial.begin(9600);
}

void loop() {
  // read the value from the sensor:
  stateSwitch1 = digitalRead(switch1);
  valueSlider1 = analogRead(slider1);
  valuelampTemp = analogRead(lampTemp);

  Serial.println(valuelampTemp);
  mapValueSlider1 = map(valueSlider1, 1, 350, 0, 255);

  if(stateSwitch1 == HIGH){
     Serial.println("ON");
    if(valuelampTemp < 100){           //green
       digitalWrite(green, HIGH);
       digitalWrite(red, LOW);
       digitalWrite(yellow, LOW);
    }else if(valuelampTemp < 300){     //red
       digitalWrite(green, LOW);
       digitalWrite(red, LOW);
       digitalWrite(yellow, HIGH);
    }else{                            //yellow
       digitalWrite(green, LOW);
       digitalWrite(red, HIGH);
       digitalWrite(yellow, LOW);
    }
  }else{
    digitalWrite(red, LOW);
    digitalWrite(green, LOW);
    digitalWrite(yellow, LOW);
  }
  
  analogWrite(pwmLampe, mapValueSlider1);

}
