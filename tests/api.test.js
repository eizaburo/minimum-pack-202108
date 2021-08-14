const frisby = require("frisby");
// const qs = require("qs");

const api_url = "https://script.google.com/macros/s/AKfycby2FEgoNfQvSAYWOZnpWsIy2x17-zqg-gc9lz3CX0Yb6NClP0MfmmplDGYmNwH3MY6onA/exec";

it("GAS APIテスト：正常", async () => {
    const res = await frisby.post(api_url, {
        body: "email=test@test.local&body=foooooo&channel=unit-test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    expect(res._body).toBe("受付けました。");
});

it("GAS APIテスト：Email不正", async () => {
    const res = await frisby.post(api_url, {
        body: "email=test&body=foooooo&channel=unit-test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    expect(res._body).toBe("エラーです。");
});

it("GAS APIテスト：問合せ内容不正", async () => {
    const res = await frisby.post(api_url, {
        body: "email=test@test.local&body=foooooooooooooo&channel=unit-test",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    expect(res._body).toBe("エラーです。");
});