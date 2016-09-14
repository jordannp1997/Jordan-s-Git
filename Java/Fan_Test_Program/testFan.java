public class testFan {
 public static void main(String[] args) {
  Fan fan1 = new Fan();
  Fan fan2 = new Fan();
  fan1.setSpeedFast();
  fan1.setRadius(10);
  fan1.setColor("yellow");
  fan1.setOn();
  fan2.setSpeedMedium();
  fan2.setRadius(5);
  fan2.setColor("blue");
  fan2.setOff();
  System.out.println(fan1.toString());
  System.out.println(fan2.toString());
 }
}

