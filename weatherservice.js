class WeatherService {
    static getForecast() {
      return Array.from({ length: 5 }, (_, index) =>
        WeatherService.getForecastForDate(new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000))
      );
    }
  
    static getForecastForDate(date) {
      const temp = WeatherService.getRandomInt(-30, 55);
      const summary = WeatherService.getSummary(temp);
      return new WeatherForecast(date, temp, summary);
    }
  
    static getSummary(temp) {
      if (temp > 40) {
        return "Scorching";
      } else if (temp > 30) {
        return "Hot";
      } else if (temp > 20) {
        return "Warm";
      } else if (temp > 10) {
        return "Mild";
      } else if (temp > 0) {
        return "Cool";
      } else if (temp > -10) {
        return "Chilly";
      } else if (temp > -20) {
        return "Bracing";
      } else {
        return "Freezing";
      }
    }
