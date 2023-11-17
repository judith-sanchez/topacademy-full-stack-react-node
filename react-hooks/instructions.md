1. When opening the app for the first time, the user will see the following screen: an hourglass rotating with an infinite animation.

2. The user will then be prompted to get their location using the browser API.

3. If the user allows ✅ access to their location, they'll see the 5-day weather forecast for their current location:

4. The user will see the name of their neighborhood and the city

5. In the weather card, the user will see the date, the weather icon, the weather condition, and the max and min temperatures for that day

6. If the user denies 🚫 the location prompt, they will see on the middle of the page an input for entering manually the city name, and a button to send the request.

7. The Send button will be disabled when the input is empty or it only contains spaces.

8. After the user enters a city and presses the button, they will see the 5-day forecast for that city.

9. Use the Browser Geolocation API to get the user’s current location.

10. Create a custom hook useCurrentPosition which will return an object similar to { position, success, error }

11. position will return the result of getCurrentPosition, or undefined in case of an error

12. success will be true if the user accepted the request and getting the position succeeded

13. error will be true if there was an error or the user rejected the request

14. It returns an object similar to { data, loading, error }

15. data will be undefined until the request succeeds

16. loading will be true while the data is loading

17. error will contain any errors that might happen while performing the requests

18. Show the hourglass from above while the

19. requests are loading.

20. Log the error to the console, if received.
    Or even better, find a way to display the errors on the page.

21. The images come from the same API using the following URL: https://developer.accuweather.com/sites/default/files/{iconID}-s.png

22. The iconID comes from the API request

23. The API expects the iconID to be 2 characters long, so if the iconID is smaller than 10 you should append a 0 before it - for example, 3 becomes 03.
