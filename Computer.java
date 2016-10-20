public class Computer extends Electronic
{
  public CPU theCPU = new CPU(4.6,3.1,1.5);
  
  Computer(double _voltage, boolean _powered, CPU _theCPU)
  {
    super(_voltage,_powered);
    this.theCPU = _theCPU;
  }
  
  public void togglePower(){
  	super.togglePower();
  }
}