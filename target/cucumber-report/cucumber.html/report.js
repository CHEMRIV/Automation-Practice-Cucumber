$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "As user i want to create an account on automation practice website",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"\u003cfirstname\u003e\",lastname \"\u003clastname\u003e\"and password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"\u003caddL1\u003e\" city\"\u003ccity\u003e\" state\"\u003cstate\u003e\" zipCd\"\u003czipCd\u003e\" country\"\u003ccountry\u003e\" mobNo.\"\u003cmobNo\u003e\" addAlias\"\u003caddAlias\u003e\" and click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "addL1",
        "city",
        "state",
        "zipCd",
        "country",
        "mobNo",
        "addAlias"
      ],
      "line": 13,
      "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Happy",
        "Life",
        "Always123",
        "1 Nice Building",
        "Maryland",
        "Ohio",
        "12345",
        "United States",
        "0123456789",
        "main home"
      ],
      "line": 14,
      "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7813993200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"Happy\",lastname \"Life\"and password\"Always123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"1 Nice Building\" city\"Maryland\" state\"Ohio\" zipCd\"12345\" country\"United States\" mobNo.\"0123456789\" addAlias\"main home\" and click on register button",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 166410700,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1675099400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iEnterEmailAndClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 301871700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy",
      "offset": 73
    },
    {
      "val": "Life",
      "offset": 90
    },
    {
      "val": "Always123",
      "offset": 108
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfPersonalInformationFormWithFirstnameLastnameAndPassword(String,String,String)"
});
formatter.result({
  "duration": 1701496200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 62
    },
    {
      "val": "Maryland",
      "offset": 84
    },
    {
      "val": "Ohio",
      "offset": 100
    },
    {
      "val": "12345",
      "offset": 112
    },
    {
      "val": "United States",
      "offset": 127
    },
    {
      "val": "0123456789",
      "offset": 149
    },
    {
      "val": "main home",
      "offset": 170
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfAddressDetailsFormWithAddLCityStateZipCdCountryMobNoAddAliasAndClickOnRegisterButton(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3193770100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldNavigateToMyAccountPage()"
});
formatter.result({
  "duration": 64182800,
  "status": "passed"
});
formatter.after({
  "duration": 1233982500,
  "status": "passed"
});
formatter.uri("sign.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Page Test",
  "description": "As user I want to sign in to automation practice website",
  "id": "sign-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5778525800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user Should Navigate To SignIn Page SuccessFully",
  "description": "",
  "id": "sign-page-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Sign in Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2280840700,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 55361600,
  "status": "passed"
});
formatter.after({
  "duration": 868903700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"\u003cusername\u003e\" password \"\u003cpassword\u003e\" and see the error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4687330500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"\" password \"123456\" and see the error message \"An email address required.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3153326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 37
    },
    {
      "val": "An email address required.",
      "offset": 72
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 1514673500,
  "status": "passed"
});
formatter.after({
  "duration": 758286500,
  "status": "passed"
});
formatter.before({
  "duration": 4455177300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"abcd@gmail.com\" password \"\" and see the error message \"Password is required.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 110700,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4079017800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 25
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "Password is required.",
      "offset": 80
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 1324374600,
  "status": "passed"
});
formatter.after({
  "duration": 844843200,
  "status": "passed"
});
formatter.before({
  "duration": 5862890300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"adfdfgfg\" password \"123456\" and see the error message \"Invalid email address.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1615888800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 45
    },
    {
      "val": "Invalid email address.",
      "offset": 80
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 1177735600,
  "status": "passed"
});
formatter.after({
  "duration": 823167100,
  "status": "passed"
});
formatter.before({
  "duration": 6746035800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify The Error Message With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I sign in with username \"abcd@gmail.com\" password \"123456\" and see the error message \"Authentication failed.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1344307600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 25
    },
    {
      "val": "123456",
      "offset": 51
    },
    {
      "val": "Authentication failed.",
      "offset": 86
    }
  ],
  "location": "SignSteps.iSignInWithUsernamePasswordAndSeeTheErrorMessage(String,String,String)"
});
formatter.result({
  "duration": 1207175300,
  "status": "passed"
});
formatter.after({
  "duration": 822293900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Sign in with username \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see Sign out link is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Georgesmith@gmail.com",
        "acd1234"
      ],
      "line": 33,
      "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4604202800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-in-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I Sign in with username \"Georgesmith@gmail.com\" and \"acd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 99800,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3330354600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgesmith@gmail.com",
      "offset": 25
    },
    {
      "val": "acd1234",
      "offset": 53
    }
  ],
  "location": "SignSteps.iSignInWithUsernameAnd(String,String)"
});
formatter.result({
  "duration": 3452551300,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iShouldSeeSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 48650300,
  "status": "passed"
});
formatter.after({
  "duration": 876008600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "verify That User Should Log Out SuccessFully",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-out-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@smoke"
    },
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Sign in with username \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on Sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see Sign in link on Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-out-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 45,
      "id": "sign-page-test;verify-that-user-should-log-out-successfully;;1"
    },
    {
      "cells": [
        "Georgesmith@gmail.com",
        "acd1234"
      ],
      "line": 46,
      "id": "sign-page-test;verify-that-user-should-log-out-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4950798500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "verify That User Should Log Out SuccessFully",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-log-out-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@smoke"
    },
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Sign in with username \"Georgesmith@gmail.com\" and \"acd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click on Sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see Sign in link on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2451965600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Georgesmith@gmail.com",
      "offset": 25
    },
    {
      "val": "acd1234",
      "offset": 53
    }
  ],
  "location": "SignSteps.iSignInWithUsernameAnd(String,String)"
});
formatter.result({
  "duration": 5646591900,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 2571900600,
  "status": "passed"
});
formatter.match({
  "location": "SignSteps.iShouldSeeSignInLinkOnHomePage()"
});
formatter.result({
  "duration": 52153400,
  "status": "passed"
});
formatter.after({
  "duration": 845270800,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "As user I want to shop from women category page on automation practice website",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4806568000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to women category page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 3855235800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldNavigateToWomenCategoryPage()"
});
formatter.result({
  "duration": 42858100,
  "status": "passed"
});
formatter.after({
  "duration": 838279300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that popup message is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the message confirming that the \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on x button to close the pop up.",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4222820700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that popup message is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the message confirming that the \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on x button to close the pop up.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1547494500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenCategorySteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2767757800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 167442900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 146294500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 156362400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 3109231100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iVerifyThatPopupMessageIsDisplayed()"
});
formatter.result({
  "duration": 180645300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 46
    }
  ],
  "location": "WomenCategorySteps.iShouldSeeTheMessageConfirmingThatThe(String)"
});
formatter.result({
  "duration": 51093800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnXButtonToCloseThePopUp()"
});
formatter.result({
  "duration": 85634900,
  "status": "passed"
});
formatter.after({
  "duration": 907649300,
  "status": "passed"
});
formatter.before({
  "duration": 5074133600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that popup message is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the message confirming that the \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on x button to close the pop up.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2129649500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategorySteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1186767500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 167229200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 157526300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 128402700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 3094471500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iVerifyThatPopupMessageIsDisplayed()"
});
formatter.result({
  "duration": 105836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 46
    }
  ],
  "location": "WomenCategorySteps.iShouldSeeTheMessageConfirmingThatThe(String)"
});
formatter.result({
  "duration": 53140400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnXButtonToCloseThePopUp()"
});
formatter.result({
  "duration": 96612200,
  "status": "passed"
});
formatter.after({
  "duration": 952756500,
  "status": "passed"
});
formatter.before({
  "duration": 7450519100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that popup message is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the message confirming that the \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on x button to close the pop up.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 7512627500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategorySteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 7628866900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 181803300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 98995700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 157868000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 3121004300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iVerifyThatPopupMessageIsDisplayed()"
});
formatter.result({
  "duration": 7398484200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 46
    }
  ],
  "location": "WomenCategorySteps.iShouldSeeTheMessageConfirmingThatThe(String)"
});
formatter.result({
  "duration": 59423600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnXButtonToCloseThePopUp()"
});
formatter.result({
  "duration": 101815500,
  "status": "passed"
});
formatter.after({
  "duration": 894448900,
  "status": "passed"
});
formatter.before({
  "duration": 11327545200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify that popup message is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the message confirming that the \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on x button to close the pop up.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5671924600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategorySteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2949353600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 176530500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 211026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 149256900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 3118425600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iVerifyThatPopupMessageIsDisplayed()"
});
formatter.result({
  "duration": 113083700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 46
    }
  ],
  "location": "WomenCategorySteps.iShouldSeeTheMessageConfirmingThatThe(String)"
});
formatter.result({
  "duration": 46528600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnXButtonToCloseThePopUp()"
});
formatter.result({
  "duration": 84274800,
  "status": "passed"
});
formatter.after({
  "duration": 869675300,
  "status": "passed"
});
});