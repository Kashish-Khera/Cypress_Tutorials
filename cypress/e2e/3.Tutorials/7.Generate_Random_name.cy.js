// Generate a random name consisting of letters
function generateRandomName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomName = '';
    const nameLength = Math.floor(Math.random() * 10) + 5; // Random name length between 5 and 15 characters
  
    for (let i = 0; i < nameLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters.charAt(randomIndex);
    }
  
    return randomName;
  }
  
  describe('Generate Random Name', () => {
    it('should generate a random name', () => {
      const randomName = generateRandomName();
      cy.log(`Generated Random Name: ${randomName}`);
    });
  });
  