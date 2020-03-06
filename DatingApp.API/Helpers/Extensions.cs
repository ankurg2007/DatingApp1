using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Eror");
            response.Headers.Add("Access-Control-Allow-Orign", "*");

        }
        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = theDateTime.Year - DateTime.Now.Year;
            if (theDateTime.AddYears(age) != DateTime.Today)
                age--;

            return age;
        }
    }
}