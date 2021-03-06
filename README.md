# Punduction Guide #

Hello to the pretty brief guide to using Punduction, please follow these instructions as closely as you can to ensure a smooth process to getting you on your way. If you have any questions you can contact me on [twitter](https://twitter.com/PunLife_)

If you'd like to support the project you can donate at https://ko-fi.com/punlife, any donation is appreciated, thank you for your generosity!

Hope you enjoy your time using Punduction!

**Punlife**

------------------
## What is Punduction

Punduction is a controller for stream overlays that works with some of the available APIs for tournament hosting websites to flexibly populate your overlays, HTML or text based ones. 

## Brand assets

I've attached a couple of **Powered by Punduction** logos that you can place on your stream/overlays as a way of supporting the application, this is not in anyway mandatory but it makes me feel warm and fuzzy inside to see the application used across a range of streams. These assets can be found in the **brandAssets** folder.

------------------

## Obtaining API keys for Scoreboard providers

You are required to obtain your own API keys to use with Punduction, I am unable to give you access to my personal keys.

### SmashGG

You can find the instructions for generating an API key [here](https://developer.smash.gg/docs/authentication/). (If you are unable to generate the key using these instructions I suggest joining the [SmashGG discord](https://developer.smash.gg/docs/join-discord) and requesting help from the staff there). 

### Challonge

You can access the instructions in the **Authentication** section of the [Challonge API documentation](https://api.challonge.com/v1).

--------------------

## Reporting bugs, feedback and suggestions

You can report any bugs you find [here](https://forms.gle/euMVVvhtDMUY66EY6) (along with suggestions and feedback of any kind)

-------------------------------------------------------

## First time setup and prerequisites

Make sure you download the prerequisites provided on the release page of the Punduction repository https://github.com/punlife/Punduction-release/releases. Following the instructions provided within that ZIP file then proceed with the instructions below (either written or video)

### Written instructions

1. Add your API keys to the application through the "Settings" tab and save your options


-----------------------------

## Loading data

### Written instructions

* Choose the scoreboard provider and output type on the **Production** tab.
* **Challonge:** Input your username and a Challonge URL in the appropriate fields (Please keep in mind the current Challonge API (v1) doesn't support tournaments that are part of larger events, it will simply fail to load such event, please instead output the player list to CSV and use the **Raw** scoreboard provider as a temporary workaround) (Example: https://ufg.challonge.com/UFGResultsDay2020Tekken please ensure you copy the entire URL from browser)
* **SmashGG:** Input your tournament/event link like this example https://smash.gg/tournament/tnt-online-february/details or https://smash.gg/tournament/tnt-online-february/event/tnt-online-tekken-7-pc/overview. Please ensure you copy the entire URL from browser
* **Raw:** Input a CSV file of the following format: **name,prefix,country**. The prefix and country can be empty but please ensure the name is populated.
* If using HTML overlays make sure you press **Start Server** before starting and let the **Console** window run in the background.
* After loading the appropriate data, choose the appropriate players, scores etc. and press save.
* If you're trying to populate the streamqueue, ensure you set it on SmashGG, populate the stream name field with matching stream and press **Update stream queue**. This will load the stream queue and then you can choose a specific set and press **Populate stream queue** to update the player fields with corresponding players.
* You can access the directories of the local server at http://localhost:8080/, from there you can navigate to wherever you placed your overlays and then put the full URL in a browser source in OBS etc.

### Video instructions

Loading Challonge data - https://youtu.be/yhR9lXCY65c

Loading SmashGG data or raw data - https://youtu.be/ley9rOr9O8w

-----------------------------

## Output data

### Written instructions

* You can find the JSON/XML outputs within the **output** folder located within the application directory
* Raw (txt file) can be found in the **output/raw** directory (each piece of info will be located within a separate file)

### Video instructions

https://youtu.be/xiBmp6ScoOE

-----------------------------

## Suggested file structure

### Written instructions

I'd recommend placing all the overlays within the **overlay** folder and making a separate folder for each set of overlays. The example JS script within the folder can be used to populate your HTML overlay files.

### Video instructions

https://youtu.be/tt_k1c6RL9c

-----------------------------

## Modifying static data (Internal Database)

In the v1.0, Punduction doesn't have a native way of editing its own internal database of round names, countries, commentators and teams. However, there is still a relatively easy and quick way of editing the database and that is to use [DB Browser for SQLite](https://sqlitebrowser.org/). This tool will allow you to edit **PunductionRepository.db** file within the application directory which is where the database is stored. Please ensure you don't add any new fields manually as the app will just ignore them, do feel free to request additional information to be added through the suggestions/feedback form linked at the top of this file.

-----------------------------

## Default Shortcuts

- Ctrl + S  - **Save scoreboard**
- Ctrl + D  - **Swap players**
- Ctrl + 1 (Number row)  - **Increment player 1 score**
- Ctrl + 2 (Number row)  - **Increment player 2 score**
- Ctrl + Shift + 1 (Number row)  - **Decrement player 1 score**
- Ctrl + Shift + 2 (Number row)  - **Decrement player 2 score**

Any of these shortcuts can be changed in the **Settings** tab. Please do pay attention not to use Shift and any other key as a combination, but you can use Shift+Another modifier (Ctrl/Alt) + Letter/Number/Key without issues. If you do end up using shift Windows throws out an exception and kills the application (you can reset the settings if you do gets stuck with this problem by deleting the settings file itself which is found within the **Settings** folder).



