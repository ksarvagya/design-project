export default apiResponse => {
  return {
    sentiment: apiResponse.sentimenthq.results,
    emotion: {
      anger: apiResponse.emotion.results.anger,
      fear: apiResponse.emotion.results.fear,
      joy: apiResponse.emotion.results.joy,
      sadness: apiResponse.emotion.results.sadness,
      surprise: apiResponse.emotion.results.surprise
    },
    keywords: apiResponse.keywords.results,
    personality: {
      agreeableness: apiResponse.personality.results.agreeableness,
      conscientiousness: apiResponse.personality.results.conscientiousness,
      extraversion: apiResponse.personality.results.extraversion,
      openness: apiResponse.personality.results.openness
    },
    topics: {
      health: apiResponse.texttags.results.health,
      jobs: apiResponse.texttags.results.jobs,
      nostalgia: apiResponse.texttags.results.nostalgia,
      relationships: apiResponse.texttags.results.relationships,
      romance: apiResponse.texttags.results.romance,
      school: apiResponse.texttags.results.school,
      weather: apiResponse.texttags.results.weather
    }
  };
};
