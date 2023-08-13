export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          name: { common: "Country 1" },
          flags: { svg: "flag-url-1" },
          population: 1234567890,
          region: "Europe",
          capital: ["City 1", "City 2"],
        },
        {
          name: { common: "Country 2" },
          flags: { svg: "flag-url-2" },
          population: 123456789,
          region: "Europe",
          capital: ["City 3", "City 4"],
        },
        // ... more data ...
      ],
    })
  ),
};
