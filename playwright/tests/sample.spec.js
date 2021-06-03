const { beforeEach } = require("mocha");
const playwright = require("playwright");
const { playAudit } = require("playwright-lighthouse");
jest.setTimeout(120000);
describe("PlayWrite", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await playwright["chromium"].launch({
      headless: false,
    });
    page = await browser.newPage();
  });
  xit("Input", async () => {
    await page.goto("https://letcode.in/edit");
    // await page.click("text =  Log in ");
    // await page.fill("input[name='email']", "smitaduttametia@gmail.com");
    // await page.fill("input[name='password']", "Test@1992");
    // await page.click('button:text("LOGIN")');
    // await page.click("#testing");
    // await page.waitForSelector("text = Welcome Automation Engineer ");
    // await page.click("#edit");
    //type fill
    await page.fill("#fullName", "Smita");

    //append text at end
    const append = await page.$("#join");
    await append.focus();
    await page.keyboard.press("End");
    await append.type(" Human");

    //get text

    const getText = await page.getAttribute("#getMe", "value");
    console.log(getText);

    //clear text

    await page.fill("#clearMe", "");

    await page.screenshot({ path: `playwright/tests/screenshot/example.png` });
  });
  xit("dialodg/Alert", async () => {
    await page.goto("https://letcode.in/alert");
    const promt = await page.$("#prompt");
    page.on("dialog", (dialog) => {
      console.log("Message" + dialog.message());
      console.log("Default" + dialog.defaultValue());
      dialog.accept("Hello smita");
    });
    await promt.click();
    await page.screenshot({ path: `playwright/tests/screenshot/example2.png` });

    const confirm = await page.$("#confirm");
    page.on("dialog", (dialog) => {
      console.log("Message" + dialog.message());
      console.log("Default" + dialog.defaultValue());
      console.log("Type" + dialog.type());
      dialog.accept();
    });
    await confirm.click();
    await page.screenshot({ path: `playwright/tests/screenshot/example3.png` });
  });

  it("select/dropdown", async () => {
    await page.goto("https://letcode.in/dropdowns");
    const dropdown = await page.$("#fruits");
    dropdown.selectOption("2");
    const msg = await page.$("div.notification.is-success");
    console.log(msg)
    await page.screenshot({
      path: `playwright/tests/screenshot/dropdown1.png`,
    });
  });
  afterAll(async () => {
    await page.close();
    await browser.close();
  });
});
