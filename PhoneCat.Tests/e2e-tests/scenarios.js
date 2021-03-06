﻿describe("phonecat Application", function () {

    describe("Phone list", function () {

        beforeEach(function () {
            browser.ignoreSynchronization=true;
            browser.get("");
        });

        it("should filter the phone list as a user types into the search box", function () {
            var phoneList = element.all(by.repeater("phone in $ctrl.phones"));
            var query = element(by.model("$ctrl.query"));

            //expect(phoneList.count()).toBe(3);

            query.sendKeys("nexus");
            //expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys("motorola");
            //expect(phoneList.count()).toBe(2);
        });

    });
});