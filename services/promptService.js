exports.engineerTagsPrompt = (content) => {
  return `Given the following content, please generate a list of relevant tags from the predefined set:
  ${content}.
  The tags associated with this content should reflect its primary topics, themes, or subjects. Consider the content's focus on areas such as ${tags.join()}.
  Output: Please provide an array of top 5 relevant tags in JSON format that align with the content's primary themes or topics.`;
};

exports.engineerContentJistPrompt = (content) => {
  return `Given a lengthy piece of content, please generate a concise summary within 250 characters.
  Content: ${content}.
  Requirements:
  The summary should capture the main points or essence of the content.
  Ensure the summary is within 250 characters.
  Focus on brevity while retaining the key information.
  Output: Please provide a summary that effectively conveys the primary information of the content in 250 characters or less.`;
};

exports.engineerContentTitlePrompt = (content) => {
  return `Given a piece of content, please generate a succinct title within 50 characters.
  Content: ${content}
  Requirements:
  The title should be brief yet effectively capture the essence of the content.
  Ensure the title is within 50 characters for optimal readability and engagement.
  Output: Please provide a title that encapsulates the main idea or theme of the content in 50 characters or less.`;
};

exports.engineerImproveContentPrompt = (content) => {
  return `As an article, blog, or content writer, your task is to enhance the given content while maintaining its core essence within a 2000-character limit.
  Given Content:
  ${content}.
  Enhancement Instructions:
  Retain the core message and primary information of the content.
  Improve clarity, coherence, and engagement.
  Expand on key points, provide additional context, or refine language for better readability.
  Ensure the enhanced content fits within 2000 characters but not less than 1500 characters.
  Output: Please provide an enhanced version of the given content that maintains its core while improving clarity, coherence, and engagement within character limit.`;
};
const tags = [
  'Development',
  'BestPractices',
  'Coding',
  'Frameworks',
  'Backend',
  'Frontend',
  'DevOps',
  'DataScience',
  'Visualization',
  'MachineLearning',
  'Analytics',
  'BigData',
  'AI',
  'Privacy',
  'Cybersecurity',
  'Threats',
  'Security',
  'IncidentResponse',
  'CodingSecurity',
  'Compliance',
  'Hacking',
  'Cloud',
  'Migration',
  'Infrastructure',
  'MultiCloud',
  'Serverless',
  'CostOptimization',
  'Product',
  'Design',
  'UXResearch',
  'Agile',
  'Lifecycle',
  'DesignThinking',
  'EmergingTech',
  'Blockchain',
  'IoT',
  'ARVR',
  'EdgeComputing',
  'Quantum',
  'Industry',
  'Healthcare',
  'Fintech',
  'Ecommerce',
  'EdTech',
  'Automotive',
  'Trending',
  'AIML',
  'BlockchainDev',
  'CyberTrends',
];
