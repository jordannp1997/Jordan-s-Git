public class Fan {
 public static final int SLOW = 1;
 public static final int MEDIUM = 2;
 public static final int FAST = 3;

 private int speed;
 private boolean on;
 private double radius;
 String color = "blue";

 public Fan() {
  speed = SLOW;
  on = false;
  radius = 5.0;
 }

 public void setSpeedSlow() {
  speed = SLOW;
 }

 public void setSpeedMedium() {
  speed = MEDIUM;
 }

 public void setSpeedFast() {
  speed = FAST;
 }

 public void setOn() {
  on = true;
 }

 public void setOff() {
  on = false;
 }

 public void setRadius(double newRadius) {
  radius = newRadius;
 }

 public void setColor(String newColor) {
  color = newColor;
 }

 public int getSpeed() {
  return speed;
 }

 public boolean getState() {
  return on;
 }

 public double getRadius() {
  return radius;
 }

 public String getColor() {
  return color;
 }

 public String toString() {
  if (on == true) {
   return "fan speed is " + speed + ", fan color is " + color + ", fan radius is " + radius;
  } else {
   return "fan is off, fan color is " + color + ", fan radius is " + radius;
  }
 }
}