public class CPU
{
  public double clockSpeed = 4.0;
  public double busSpeed = 3.0;
  public double memSpeed = 1.4;
  
  CPU(double _clockSpeed, double _busSpeed, double _memSpeed)
  {
		this.clockSpeed = _clockSpeed;
		this.busSpeed = _busSpeed;
		this.memSpeed = _memSpeed;
  }
  
  public String toString(){
    return "Clock speed: " + clockSpeed + "\nBus speed: " + busSpeed + "\nMemory speed: " + memSpeed;
  }
  
}