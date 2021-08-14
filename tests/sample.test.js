const { expect } = require("@jest/globals");
const frisby = require("frisby");
const qs = require("qs");

const api_url = "https://script.google.com/macros/s/AKfycbx3gKTYfJsYLTcTd0Z8Wpg5W8RHj_g5AHuYqXt-9a6sYHCkKttpg3q-5YQY-lhNx4xWsQ/exec";

it("GAS APIテスト", async () => {
    const res = await frisby.post(api_url, {
        body: qs.stringify({
            email: "test@test.local",
            body: "hogehoge",
            channel: "test"
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    expect(res._body).toBe("受付けました。");
});