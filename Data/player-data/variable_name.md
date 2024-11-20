# Please look at the [Wyscout Glossary]("https://dataglossary.wyscout.com/) for more detailed definitions!!


## General Stats
- position = position on the field the player played in during the match (0 = not enough time to figure out their position)
- minutes_played = total minutes played during the game
- total_actions = total actions a player made 
- successful_actions = successful actions a player made

## Duels stats

- total_duels = number of 1v1 actions regardless of scenario (offensive, defensive, 50-50, aerial)
- aerial_duels = number of aerial duels attempted
- defensive_duels = number of defensive duels attempted
- loose_ball_duels = number of loose ball duels attempted
- slide_tackles = number of slide tackles attempted
- offensive_duels = number of offensive duels attempted

## Attacking Stats

- touches_inside_box = number of ball touches inside the box
- offsides = number of offside offenses
- progressive_runs_attempted = A continuous ball control by one player attempting to draw the team significantly closer to the opponent goal.
- fouls_drawn = number of fouls the other team committed on the player
- xa (expected assists) = sum of expected goals (xG) values of the shot that their pass led to
- goals = number of goals scored
- assists = number of assists 
- shots = number of shots attempted
- shots_on_target = number of shots attempted that were on target
- xg (expected goals) = A metric that assigns to every shot a probability (based on historical stats) of how likely it is to score from the position, type of assist, preceding events etc. A modern metric that allows to study the results of the matches with more stress on predictability of moments creation and less on pure luck **(wyscout definition)**


## Losses/Recoveries
- losses = number of ball losses
- losses_in_own_half = number of ball losses in team's own half
- recoveries = number of ball recoveries
- recoveries_in_own_half = number of ball recoveries in opponent's half
- interceptions = number of pass interceptions


## Discipline Stats

- minute_red_card_received = the minute the player received a red card (0 = no red received)
- minute_yellow_card_received = the minute the player received a yellow card (0 = no yellow received)
- fouls = number of fouls committed
- yellow_cards = number of yellow cards received (max of 2)
- red_cards = number of red cards received (max of 1)


## Passing Stats
- total_passes = number of passes attempted
- long_passes = number of long passes attempted
- forward_passes = number of passes going forward
- back_passes = number of passes going backwards
- second_assists = number of passes preceeding the assist
- passes_into_final_third = number of passes that are entering the opponent's own third  of the field
- passes_into_box = number of passes entering the 18-yard box
- received_passes = number of passes a player received
- crosses = number of crosses attempted
- accurate_crosses = number of accurate crosses
- shot_assists = number of passes that preceeded a shot


## GK Stats
- gk_stat_conceded_goals = number of goals conceded
-gk_stat_xcg = the xg the opposing team created against the opposing team
- gk_stat_shots_against = number of shots attempted against the goal keeper
- gk_stat_saves = number of saves made
- gk_stat_reflex_saves = number of saves made using reflexes
- gk_stat_passes_to_gk = number of passes made to the goal keeper
- gk_stat_goal_kicks_attempted = total number of goal kicks
- gk_stat_short_goal_kicks = number of goal kicks that was played to a player inside their own third
- gk_stat_long_goal_kicks = number of goal kicks that was played outside their own third