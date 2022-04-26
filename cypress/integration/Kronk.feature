Feature: Testing out the secret entrance to the secret lab
    Goes to the secret lab
    throws the lever
    ...but is it the right lever?
    We shall find out, bwahaha

    Scenario: Getting Kronk to throw the lever
        Given I am at THELAB
        When I bring Kronk
        And he pulls the wrong lever
        Then I fall into the alligator pit