using System;
class BinaryTriangle {

   static void Main(string[] args) {

      int size;
      Console.WriteLine("Enter the size:");
      size = int.Parse(Console.ReadLine());

      Console.WriteLine("Triangle Size "+size+" is:"); 
      //write your logic here

      /*
      * I don't have something to run C# programs at my computer xD
      * But here my solution without test it - adding comments to explain the logic
      */
      for (int i = 0; i < size; i++)
      {
         for (int j = 0; j <= i; j++)
         {
            // Using this to change between 1 and 0 xD
            Console.Write(j % 2 == 0 ? "1" : "0");
         }
         Console.WriteLine();
      }
     //end 

   }
}  

