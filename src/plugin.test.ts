import { chatgptFrontendPlugin } from './plugin';

describe('chatgpt-frontend', () => {
  it('should export plugin', () => {
    expect(chatgptFrontendPlugin).toBeDefined();
  });
});
