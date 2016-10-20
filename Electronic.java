public class Electronic
{
  public double voltage = 12;
  public boolean powered = false;
  
  Electronic(double _voltage, boolean _powered)
  {
    this.voltage = _voltage;
    this.powered = _powered;    
  }
  
  public void togglePower(){
  	powered = !powered;
  }
}