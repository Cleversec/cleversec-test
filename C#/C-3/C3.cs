using System;

class Program{

   static void Main(string[] args) {


      Console.WriteLine("Enter the number:"); 
      int number = Console.Read();  

      /*
      * I don't have something to run C# programs at my computer xD
      * But here my solution without test it - adding comments to explain the logic
      */

      int numberA = 0;
      int numberB = 1;

      for (int i = 0 ; i < number ; i++) {
         Console.WriteLine(term1);

         int nextNumber = numberA + numberB;
         numberA = numberB;
         numberB = nextNumber;
      }


      Console.WriteLine("First terms of fibonacci series are:");
      Console.WriteLine(number);
   }
}