import * as dotenv from "dotenv";
dotenv.config();
import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.TOKEN});

const response = await octokit.request('GET /user/starred', {per_page: 100})

response.data.forEach(data => {
  console.log(data.full_name)
})