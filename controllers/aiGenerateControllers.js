const {
  engineerTagsPrompt,
  engineerContentJistPrompt,
  engineerContentTitlePrompt,
  engineerImproveContentPrompt,
} = require('../services/promptService');
const { getGptResponse } = require('../services/gptService');
require('dotenv').config();

exports.generateTags = async (req, res) => {
  const content = req?.body?.content;
  return res.status(200).json(await generateTagsHelper(content));
};

const generateTagsHelper = async (content) => {
  const prompt = engineerTagsPrompt(content);
  let gptResponse = await getGptResponse(prompt);
  return JSON.parse(gptResponse);
};

exports.generateJist = async (req, res) => {
  const content = req?.body?.content;
  return res.status(200).json(await generateJistHelper(content));
};

const generateJistHelper = async (content) => {
  const prompt = engineerContentJistPrompt(content);
  const gptResponse = await getGptResponse(prompt);
  return gptResponse;
};

exports.generateTitle = async (req, res) => {
  const content = req?.body?.content;
  return res.status(200).json(await generateTitleHelper(content));
};

const generateTitleHelper = async (content) => {
  const prompt = engineerContentTitlePrompt(content);
  const gptResponse = await getGptResponse(prompt);
  return JSON.parse(gptResponse);
};

exports.improviseContent = async (req, res) => {
  const content = req?.body?.content;
  if (content.length < process.env.VALID_CONTENT_LENGTH) {
    return res
      .status(500)
      .json('Eagerly waiting for a valid content length to do the magic!!!');
  }
  return res.status(200).json(await improviseContentHelper(content));
};

const improviseContentHelper = async (content) => {
  const prompt = engineerImproveContentPrompt(content);
  const gptResponse = await getGptResponse(prompt);
  return gptResponse;
};

exports.doAiMagic = async (req, res) => {
  const { content } = req?.body;
  const hasValidContent = content.length > process.env.VALID_CONTENT_LENGTH;
  if (!hasValidContent) {
    return res
      .status(500)
      .json('Eagerly waiting for a valid content length to do the magic!!!');
  }
  const enhancedContent = {
    content: await improviseContentHelper(content),
    title: await generateTitleHelper(content),
    jist: await generateJistHelper(content),
    tags: await generateTagsHelper(content),
  };
  return res.status(200).json(enhancedContent);
};
