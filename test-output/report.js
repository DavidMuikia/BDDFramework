$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want a login page so that only authentic",
  "description": "   users will be able to login",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@sprint1"
    },
    {
      "line": 1,
      "name": "@Database"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#     Scenario: Valid users should be able to login"
    },
    {
      "line": 6,
      "value": "#     Given I am on techfios site"
    },
    {
      "line": 7,
      "value": "#     When I enter username and password"
    },
    {
      "line": 8,
      "value": "#     And I click on sign button"
    },
    {
      "line": 9,
      "value": "#     Then Dashboard page should display"
    }
  ],
  "line": 11,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on techfios site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on sign button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;",
  "rows": [
    {
      "cells": [
        "username",
        "pasword"
      ],
      "line": 18,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 19,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7488281100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Database"
    },
    {
      "line": 1,
      "name": "@sprint1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on techfios site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"techfiosdemo@gmail.com\" and \"\u003cpassword\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on sign button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_techfios_site()"
});
formatter.result({
  "duration": 89035700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 9
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 38
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 164494300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_sign_button()"
});
formatter.result({
  "duration": 2586033700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.dashboard_page_should_display()"
});
formatter.result({
  "duration": 30860100,
  "status": "passed"
});
formatter.after({
  "duration": 629170000,
  "status": "passed"
});
});