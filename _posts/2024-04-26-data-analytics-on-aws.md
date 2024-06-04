---
layout: post
type: post
tags: [investing, AI, RAG]
title: Meet SEC AI
published: true
---

## SEC AI

- [SEC AI](https://jpc2-secai.streamlit.app/)
- [Code](https://github.com/josephpconley/sec-ai)    

Wouldn't it be great if you didn't have to manually sift through 100-page annual reports for your investments?

Just kidding, you should probably still do that.

But if you want a reading companion that can help you find the answers to quick questions, track trends over many years, or compare multiple competitors in an industry, then check out [SEC AI](https://jpc2-secai.streamlit.app/). It's a simple Q&A chatbot that lets you search for companies by ticker, load one or more SEC filings, and then ask questions of the loaded docs.

For example, let's get a breakdown of Berkshire Hathaway's revenue for 2023. First we search by ticker and select `Add Filing ` for the latest 10-k filing:

<div class="row justify-content-center">
<table class="image">
	<tr><td><img src="/assets/2024-04-08_23-01.png" alt="Step 1"/></td></tr>
</table>
</div>

Next, click `Load Docs` to selected filing(s) into a local in-memory vector store (powered by Chroma). Finally we ask our question and get a response:

<div class="row justify-content-center">
<table class="image">
	<tr><td><img src="/assets/2024-04-08_23-01_1.png" alt="Step 2"/></td></tr>
</table>
</div>

This currently requires an OpenAI [API key](https://platform.openai.com/api-keys), however the next version will include model selection as an option with an open-source LLM option to avoid having to provision your own key. I'm especially excited to test this given the recent news that [an open-source model surpassed GPT-4 in performance](https://venturebeat.com/ai/cohere-launches-command-r-a-powerful-llm-optimized-for-enterprise-ai/)

## Next Steps

In addition to testing open-source models, I'd also like to add the following:

- Including investor call transcripts in context
- Generating summary-level reports to focus on specific metrics and financials
- Automating reports based on company-specific prompts via email

## Reflections on ChatGPT for Coding

While I've built some RAG-based tools in Python using frameworks like [LangChain](https://www.langchain.com/), I had zero upfront knowledge of Streamlit. So I also used this as an opportunity to see just how effective I could be with a brand new framework using mostly ChatGPT and [Cursor](https://cursor.sh/). While I needed to hit the documentation in a few spots, overall these coding tools got me most of the way there. While this may not be production-ready per se, it certainly provides quick iterative feedback on ideas and gives me a feel for how the app should flow.

## Suggestions?

Let me know what you think and if you have any suggestions. Thanks!
