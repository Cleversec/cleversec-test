using System;


class Program{

   static void Main(string[] args) {
      Console.WriteLine("Enter the number:"); 
      int number = Console.Read();  

      Console.WriteLine("Enter the number to search:"); 
      int searchNumber = Console.Read();

      /*
      * I don't have something to run C# programs at my computer xD
      * But here my solution without test it - adding comments to explain the logic
      */

      // turning number into string
      string numberString = number.ToString();
      // turning searched number into string
      char searchChar = searchNumber.ToString();
      // aux counter to increment each time that we found the searchChar appears on numberString
      int counter = 0;

      // Comparing each numberString digit with the searched number
      foreach (char digit in numberString) {
         if (digit == queryChar) {
            counter++;
         }
      }
      
      Console.WriteLine("Number of occurence of given number is:");
         
      Console.WriteLine(counter);
   }

}