import { PackageHelpers } from '../types/index.js';

export const packageHelpers: PackageHelpers = {
  '@modelcontextprotocol/server-brave-search': {
    requiredEnvVars: {
      BRAVE_API_KEY: {
        description: 'API key for Brave Search',
        required: true
      }
    }
  },
  '@modelcontextprotocol/server-github': {
    requiredEnvVars: {
      GITHUB_PERSONAL_ACCESS_TOKEN: {
        description: 'Personal access token for GitHub API access',
        required: true
      }
    }
  },
  '@modelcontextprotocol/server-gitlab': {
    requiredEnvVars: {
      GITLAB_PERSONAL_ACCESS_TOKEN: {
        description: 'Personal access token for GitLab API access',
        required: true
      },
      GITLAB_API_URL: {
        description: 'GitLab API URL (optional, for self-hosted instances)',
        required: false
      }
    }
  },
  '@modelcontextprotocol/server-google-maps': {
    requiredEnvVars: {
      GOOGLE_MAPS_API_KEY: {
        description: 'API key for Google Maps services',
        required: true
      }
    }
  },
  '@modelcontextprotocol/server-slack': {
    requiredEnvVars: {
      SLACK_BOT_TOKEN: {
        description: 'Slack Bot User OAuth Token (starts with xoxb-)',
        required: true
      },
      SLACK_TEAM_ID: {
        description: 'Slack Team/Workspace ID',
        required: true
      }
    }
  },
  '@raygun.io/mcp-server-raygun': {
    requiredEnvVars: {
      RAYGUN_PAT_TOKEN: {
        description: 'Personal access token for Raygun API access',
        required: true
      }
    }
  }
};
