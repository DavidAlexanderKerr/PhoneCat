angular.
    module("phoneList").
    component("phoneList", {
        templateUrl:'/scripts/app/phone-list/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
            //this.phones = getTestData();
                this.phones = Phone.query();

                this.orderProp = "age";
            }
        ]
    });

function getTestData() {
    return [
        {
            name: "Nexus S",
            snippet: "Fast just got faster with Nexus S.",
            age: 1
        },
        {
            name: "Motorola Xoom™ with Wi-Fi",
            snippet: "The next, Next Generation tablet.",
            age: 2
        },
        {
            name: "Motorola Xoom™",
            snippet: "The next, Next Generation tablet.",
            age: 3
        }];
}
        