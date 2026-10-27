// Auto-generated pruned rules (never-fired removed)
export const GENERATED_RULES_PRUNED = [
  {
    "id": "R0001",
    "description": "When BMI=Underweight AND goal=Maintain -> suggested Diet_Plan",
    "priority": 80,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.goal === 'Maintain'",
    "conditionHuman": "BMI == 'Underweight' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0002",
    "description": "When BMI=Underweight AND goal=Gain -> suggested Diet_Plan",
    "priority": 80,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.goal === 'Gain'",
    "conditionHuman": "BMI == 'Underweight' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0003",
    "description": "When BMI=Underweight AND goal=Lose -> suggested Diet_Plan",
    "priority": 80,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.goal === 'Lose'",
    "conditionHuman": "BMI == 'Underweight' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0004",
    "description": "When BMI=Normal AND goal=Maintain -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.goal === 'Maintain'",
    "conditionHuman": "BMI == 'Normal' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0005",
    "description": "When BMI=Normal AND goal=Gain -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.goal === 'Gain'",
    "conditionHuman": "BMI == 'Normal' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0006",
    "description": "When BMI=Normal AND goal=Lose -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.goal === 'Lose'",
    "conditionHuman": "BMI == 'Normal' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0007",
    "description": "When BMI=Overweight AND goal=Maintain -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.goal === 'Maintain'",
    "conditionHuman": "BMI == 'Overweight' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0008",
    "description": "When BMI=Overweight AND goal=Gain -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.goal === 'Gain'",
    "conditionHuman": "BMI == 'Overweight' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0009",
    "description": "When BMI=Overweight AND goal=Lose -> suggested Diet_Plan",
    "priority": 30,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.goal === 'Lose'",
    "conditionHuman": "BMI == 'Overweight' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0010",
    "description": "When BMI=Obese AND goal=Maintain -> suggested Diet_Plan",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.goal === 'Maintain'",
    "conditionHuman": "BMI == 'Obese' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0011",
    "description": "When BMI=Obese AND goal=Gain -> suggested Diet_Plan",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.goal === 'Gain'",
    "conditionHuman": "BMI == 'Obese' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0012",
    "description": "When BMI=Obese AND goal=Lose -> suggested Diet_Plan",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.goal === 'Lose'",
    "conditionHuman": "BMI == 'Obese' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0013",
    "description": "Age <25 AND stress High -> advice/portion",
    "priority": 85,
    "conditionString": "inputs.age < 25 && inputs.stress_level === 'High'",
    "conditionHuman": "age < 25 AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control"
    }
  },
  {
    "id": "R0014",
    "description": "Age 25-40 AND stress Low -> advice/portion",
    "priority": 30,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.stress_level === 'Low'",
    "conditionHuman": "age >= 25 AND age <= 40 AND stress_level == 'Low'",
    "effects": {
      "Meal_Portion": "Normal Meals"
    }
  },
  {
    "id": "R0015",
    "description": "Age 25-40 AND stress High -> advice/portion",
    "priority": 85,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.stress_level === 'High'",
    "conditionHuman": "age >= 25 AND age <= 40 AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control"
    }
  },
  {
    "id": "R0016",
    "description": "Age >40 AND stress High -> advice/portion",
    "priority": 85,
    "conditionString": "inputs.age > 40 && inputs.stress_level === 'High'",
    "conditionHuman": "age > 40 AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control"
    }
  },
  {
    "id": "R0017",
    "description": "Restriction None AND budget Low -> food/diet guidance",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'None' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0018",
    "description": "Restriction Vegan AND budget Low -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegan' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0019",
    "description": "Restriction Vegan AND budget Medium -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Vegan' AND budget_level == 'Medium'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0020",
    "description": "Restriction Vegan AND budget High -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Vegan' AND budget_level == 'High'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0021",
    "description": "Restriction Vegetarian AND budget Low -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0022",
    "description": "Restriction Vegetarian AND budget Medium -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND budget_level == 'Medium'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0023",
    "description": "Restriction Vegetarian AND budget High -> food/diet guidance",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND budget_level == 'High'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0024",
    "description": "Restriction Allergy AND budget Low -> food/diet guidance",
    "priority": 90,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Allergy' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Allergy-Safe",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0025",
    "description": "Restriction Allergy AND budget Medium -> food/diet guidance",
    "priority": 90,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Allergy' AND budget_level == 'Medium'",
    "effects": {
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0026",
    "description": "Restriction Allergy AND budget High -> food/diet guidance",
    "priority": 90,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Allergy' AND budget_level == 'High'",
    "effects": {
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0027",
    "description": "Health None AND BMI Underweight -> advisory/portion",
    "priority": 10,
    "conditionString": "inputs.health_condition === 'None' && results.BMI_Category === 'Underweight'",
    "conditionHuman": "health_condition == 'None' AND BMI == 'Underweight'",
    "effects": {
      "Meal_Portion": "Larger Meals"
    }
  },
  {
    "id": "R0028",
    "description": "Cooking No Kitchen AND budget Low -> food type",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0029",
    "description": "Cooking No Kitchen AND budget Medium -> food type",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'Medium'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND budget_level == 'Medium'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0030",
    "description": "Cooking No Kitchen AND budget High -> food type",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND budget_level == 'High'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0031",
    "description": "Cooking Shared Kitchen AND budget Low -> food type",
    "priority": 60,
    "conditionString": "inputs.cooking_facility === 'Shared Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "cooking_facility == 'Shared Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0032",
    "description": "Cooking Full Kitchen AND budget Low -> food type",
    "priority": 60,
    "conditionString": "inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "cooking_facility == 'Full Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0033",
    "description": "Cooking Full Kitchen AND budget High -> food type",
    "priority": 20,
    "conditionString": "inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "cooking_facility == 'Full Kitchen' AND budget_level == 'High'",
    "effects": {
      "Food_Type": "Variety of Healthy Meals"
    }
  },
  {
    "id": "R0034",
    "description": "Exercise Rarely AND goal Lose -> diet tweak",
    "priority": 50,
    "conditionString": "inputs.exercise_level === 'Rarely' && inputs.goal === 'Lose'",
    "conditionHuman": "exercise_level == 'Rarely' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0035",
    "description": "Exercise Active AND goal Gain -> diet tweak",
    "priority": 50,
    "conditionString": "inputs.exercise_level === 'Active' && inputs.goal === 'Gain'",
    "conditionHuman": "exercise_level == 'Active' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0036",
    "description": "Combo: inputs.budget_level === 'Low' && inputs.stress_level === 'High' -> effects",
    "priority": 65,
    "conditionString": "inputs.budget_level === 'Low' && inputs.stress_level === 'High'",
    "conditionHuman": "budget_level == 'Low' AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0037",
    "description": "Combo: inputs.health_condition === 'High BP' && inputs.budget_level === 'Low' -> effects",
    "priority": 98,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.budget_level === 'Low'",
    "conditionHuman": "health_condition == 'High BP' AND budget_level == 'Low'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0038",
    "description": "Combo: inputs.diet_restriction === 'None' && inputs.exercise_level === 'Active' -> effects",
    "priority": 20,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.exercise_level === 'Active'",
    "conditionHuman": "diet_restriction == 'None' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0040",
    "description": "Seed stress_level=High",
    "priority": 30,
    "conditionString": "inputs.stress_level === 'High'",
    "conditionHuman": "stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control"
    }
  },
  {
    "id": "R0041",
    "description": "Seed budget_level=Low",
    "priority": 25,
    "conditionString": "inputs.budget_level === 'Low'",
    "conditionHuman": "budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0042",
    "description": "Underweight+Gain+Active -> effects",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.goal === 'Gain' && inputs.exercise_level === 'Active'",
    "conditionHuman": "BMI == 'Underweight' AND goal == 'Gain' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0043",
    "description": "Obese+Lose+Rarely -> effects",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.goal === 'Lose' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "BMI == 'Obese' AND goal == 'Lose' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0044",
    "description": "25-40+Low+High -> effects",
    "priority": 80,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.budget_level === 'Low' && inputs.stress_level === 'High'",
    "conditionHuman": "age >= 25 AND age <= 40 AND budget_level == 'Low' AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0045",
    "description": ">40+Low+High -> effects",
    "priority": 80,
    "conditionString": "inputs.age > 40 && inputs.budget_level === 'Low' && inputs.stress_level === 'High'",
    "conditionHuman": "age > 40 AND budget_level == 'Low' AND stress_level == 'High'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0046",
    "description": "None+Underweight+No Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.health_condition === 'None' && results.BMI_Category === 'Underweight' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'None' AND BMI == 'Underweight' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0047",
    "description": "High BP+Underweight+No Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.health_condition === 'High BP' && results.BMI_Category === 'Underweight' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND BMI == 'Underweight' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0048",
    "description": "High BP+Obese+No Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND BMI == 'Obese' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0049",
    "description": "High BP+Obese+Shared Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND BMI == 'Obese' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0050",
    "description": "High BP+Obese+Full Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND BMI == 'Obese' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0051",
    "description": "High Cholesterol+Underweight+No Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && results.BMI_Category === 'Underweight' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND BMI == 'Underweight' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0052",
    "description": "High Cholesterol+Obese+No Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND BMI == 'Obese' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0053",
    "description": "High Cholesterol+Obese+Shared Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND BMI == 'Obese' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0054",
    "description": "High Cholesterol+Obese+Full Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && results.BMI_Category === 'Obese' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND BMI == 'Obese' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0055",
    "description": "High+Vegan+Rarely -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegan' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0056",
    "description": "High+Vegan+Moderate -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegan' AND exercise_level == 'Moderate'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0057",
    "description": "High+Vegan+Active -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Active'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegan' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0058",
    "description": "High+Vegetarian+Rarely -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegetarian' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0059",
    "description": "High+Vegetarian+Moderate -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegetarian' AND exercise_level == 'Moderate'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0060",
    "description": "High+Vegetarian+Active -> effects",
    "priority": 75,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Active'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegetarian' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Stress-Control Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0061",
    "description": "Underweight+Gain+High -> effects",
    "priority": 80,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.goal === 'Gain' && inputs.budget_level === 'High'",
    "conditionHuman": "BMI == 'Underweight' AND goal == 'Gain' AND budget_level == 'High'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus",
      "Food_Type": "Variety of Healthy Meals"
    }
  },
  {
    "id": "R0062",
    "description": "Obese+Lose+Low -> effects",
    "priority": 90,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.goal === 'Lose' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Obese' AND goal == 'Lose' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0063",
    "description": "<25+Allergy+Low -> effects",
    "priority": 85,
    "conditionString": "inputs.age < 25 && inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'Low'",
    "conditionHuman": "age < 25 AND diet_restriction == 'Allergy' AND budget_level == 'Low'",
    "effects": {
      "Health_Advisory": "Caution",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0064",
    "description": "25-40+Allergy+Low -> effects",
    "priority": 85,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'Low'",
    "conditionHuman": "age >= 25 AND age <= 40 AND diet_restriction == 'Allergy' AND budget_level == 'Low'",
    "effects": {
      "Health_Advisory": "Caution",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0065",
    "description": ">40+Allergy+Low -> effects",
    "priority": 85,
    "conditionString": "inputs.age > 40 && inputs.diet_restriction === 'Allergy' && inputs.budget_level === 'Low'",
    "conditionHuman": "age > 40 AND diet_restriction == 'Allergy' AND budget_level == 'Low'",
    "effects": {
      "Health_Advisory": "Caution",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0066",
    "description": "Gain+Full Kitchen+High -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Gain' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "goal == 'Gain' AND cooking_facility == 'Full Kitchen' AND budget_level == 'High'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus",
      "Food_Type": "Variety of Healthy Meals"
    }
  },
  {
    "id": "R0067",
    "description": "Lose+No Kitchen+Low -> effects",
    "priority": 80,
    "conditionString": "inputs.goal === 'Lose' && inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "goal == 'Lose' AND cooking_facility == 'No Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit",
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0068",
    "description": "High+Rarely+Lose -> effects",
    "priority": 80,
    "conditionString": "inputs.stress_level === 'High' && inputs.exercise_level === 'Rarely' && inputs.goal === 'Lose'",
    "conditionHuman": "stress_level == 'High' AND exercise_level == 'Rarely' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0069",
    "description": "High+Active+Gain -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'High' && inputs.exercise_level === 'Active' && inputs.goal === 'Gain'",
    "conditionHuman": "stress_level == 'High' AND exercise_level == 'Active' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0070",
    "description": "High BP+Allergy+Rarely -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High BP' AND diet_restriction == 'Allergy' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0071",
    "description": "High BP+Allergy+Moderate -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "health_condition == 'High BP' AND diet_restriction == 'Allergy' AND exercise_level == 'Moderate'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0072",
    "description": "High BP+Allergy+Active -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Active'",
    "conditionHuman": "health_condition == 'High BP' AND diet_restriction == 'Allergy' AND exercise_level == 'Active'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0073",
    "description": "High Cholesterol+Allergy+Rarely -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND diet_restriction == 'Allergy' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0074",
    "description": "High Cholesterol+Allergy+Moderate -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND diet_restriction == 'Allergy' AND exercise_level == 'Moderate'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0075",
    "description": "High Cholesterol+Allergy+Active -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.diet_restriction === 'Allergy' && inputs.exercise_level === 'Active'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND diet_restriction == 'Allergy' AND exercise_level == 'Active'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0076",
    "description": "<25+Moderate+Lose -> effects",
    "priority": 45,
    "conditionString": "inputs.age < 25 && inputs.exercise_level === 'Moderate' && inputs.goal === 'Lose'",
    "conditionHuman": "age < 25 AND exercise_level == 'Moderate' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0077",
    "description": "<25+Active+Maintain -> effects",
    "priority": 40,
    "conditionString": "inputs.age < 25 && inputs.exercise_level === 'Active' && inputs.goal === 'Maintain'",
    "conditionHuman": "age < 25 AND exercise_level == 'Active' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0078",
    "description": "<25+Active+Gain -> effects",
    "priority": 40,
    "conditionString": "inputs.age < 25 && inputs.exercise_level === 'Active' && inputs.goal === 'Gain'",
    "conditionHuman": "age < 25 AND exercise_level == 'Active' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0079",
    "description": "<25+Active+Lose -> effects",
    "priority": 40,
    "conditionString": "inputs.age < 25 && inputs.exercise_level === 'Active' && inputs.goal === 'Lose'",
    "conditionHuman": "age < 25 AND exercise_level == 'Active' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0080",
    "description": "25-40+Moderate+Lose -> effects",
    "priority": 45,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.exercise_level === 'Moderate' && inputs.goal === 'Lose'",
    "conditionHuman": "age >= 25 AND age <= 40 AND exercise_level == 'Moderate' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0081",
    "description": "25-40+Active+Maintain -> effects",
    "priority": 40,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Maintain'",
    "conditionHuman": "age >= 25 AND age <= 40 AND exercise_level == 'Active' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0082",
    "description": "25-40+Active+Gain -> effects",
    "priority": 40,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Gain'",
    "conditionHuman": "age >= 25 AND age <= 40 AND exercise_level == 'Active' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0083",
    "description": "25-40+Active+Lose -> effects",
    "priority": 40,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Lose'",
    "conditionHuman": "age >= 25 AND age <= 40 AND exercise_level == 'Active' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0084",
    "description": ">40+Moderate+Lose -> effects",
    "priority": 45,
    "conditionString": "inputs.age > 40 && inputs.exercise_level === 'Moderate' && inputs.goal === 'Lose'",
    "conditionHuman": "age > 40 AND exercise_level == 'Moderate' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0085",
    "description": ">40+Active+Maintain -> effects",
    "priority": 40,
    "conditionString": "inputs.age > 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Maintain'",
    "conditionHuman": "age > 40 AND exercise_level == 'Active' AND goal == 'Maintain'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0086",
    "description": ">40+Active+Gain -> effects",
    "priority": 40,
    "conditionString": "inputs.age > 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Gain'",
    "conditionHuman": "age > 40 AND exercise_level == 'Active' AND goal == 'Gain'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0087",
    "description": ">40+Active+Lose -> effects",
    "priority": 40,
    "conditionString": "inputs.age > 40 && inputs.exercise_level === 'Active' && inputs.goal === 'Lose'",
    "conditionHuman": "age > 40 AND exercise_level == 'Active' AND goal == 'Lose'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0088",
    "description": "Underweight+High+Low -> effects",
    "priority": 65,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.stress_level === 'High' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Underweight' AND stress_level == 'High' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0089",
    "description": "Normal+High+Low -> effects",
    "priority": 65,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.stress_level === 'High' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Normal' AND stress_level == 'High' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0090",
    "description": "Overweight+High+Low -> effects",
    "priority": 65,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.stress_level === 'High' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Overweight' AND stress_level == 'High' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0091",
    "description": "Obese+High+Low -> effects",
    "priority": 65,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.stress_level === 'High' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Obese' AND stress_level == 'High' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Stress-Control",
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0092",
    "description": "None+Shared Kitchen+Low -> effects",
    "priority": 50,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.cooking_facility === 'Shared Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'None' AND cooking_facility == 'Shared Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0093",
    "description": "Vegan+Shared Kitchen+Low -> effects",
    "priority": 50,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Shared Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Shared Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0094",
    "description": "Vegan+Full Kitchen+Low -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Full Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0095",
    "description": "Vegan+Full Kitchen+Medium -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Full Kitchen' AND budget_level == 'Medium'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0096",
    "description": "Vegan+Full Kitchen+High -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Full Kitchen' AND budget_level == 'High'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0097",
    "description": "Vegetarian+Shared Kitchen+Low -> effects",
    "priority": 50,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Shared Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Shared Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0098",
    "description": "Vegetarian+Full Kitchen+Low -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Full Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0099",
    "description": "Vegetarian+Full Kitchen+Medium -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Full Kitchen' AND budget_level == 'Medium'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0100",
    "description": "Vegetarian+Full Kitchen+High -> effects",
    "priority": 60,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Full Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Full Kitchen' AND budget_level == 'High'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0101",
    "description": "Allergy+No Kitchen+Low -> effects",
    "priority": 80,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Allergy' AND cooking_facility == 'No Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "No-Cook Meals",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0102",
    "description": "Allergy+No Kitchen+Medium -> effects",
    "priority": 80,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'Medium'",
    "conditionHuman": "diet_restriction == 'Allergy' AND cooking_facility == 'No Kitchen' AND budget_level == 'Medium'",
    "effects": {
      "Food_Type": "No-Cook Meals",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0103",
    "description": "Allergy+No Kitchen+High -> effects",
    "priority": 80,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.cooking_facility === 'No Kitchen' && inputs.budget_level === 'High'",
    "conditionHuman": "diet_restriction == 'Allergy' AND cooking_facility == 'No Kitchen' AND budget_level == 'High'",
    "effects": {
      "Food_Type": "No-Cook Meals",
      "Diet_Plan": "Allergy-Safe"
    }
  },
  {
    "id": "R0104",
    "description": "Allergy+Shared Kitchen+Low -> effects",
    "priority": 50,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.cooking_facility === 'Shared Kitchen' && inputs.budget_level === 'Low'",
    "conditionHuman": "diet_restriction == 'Allergy' AND cooking_facility == 'Shared Kitchen' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals"
    }
  },
  {
    "id": "R0105",
    "description": "High BP+Low+Rarely -> effects",
    "priority": 90,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.budget_level === 'Low' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High BP' AND budget_level == 'Low' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0106",
    "description": "High Cholesterol+Low+Rarely -> effects",
    "priority": 90,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.budget_level === 'Low' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND budget_level == 'Low' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0107",
    "description": "BMI:Underweight AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Underweight' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0108",
    "description": "BMI:Normal AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Normal' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0109",
    "description": "BMI:Overweight AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Overweight' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0110",
    "description": "BMI:Obese AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.budget_level === 'Low'",
    "conditionHuman": "BMI == 'Obese' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0111",
    "description": "BMI:Underweight AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "BMI == 'Underweight' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0112",
    "description": "BMI:Underweight AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "BMI == 'Underweight' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0113",
    "description": "BMI:Normal AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "BMI == 'Normal' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0114",
    "description": "BMI:Normal AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "BMI == 'Normal' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0115",
    "description": "BMI:Overweight AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "BMI == 'Overweight' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0116",
    "description": "BMI:Overweight AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "BMI == 'Overweight' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0117",
    "description": "BMI:Obese AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "BMI == 'Obese' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0118",
    "description": "BMI:Obese AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "BMI == 'Obese' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0119",
    "description": "BMI:Underweight AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.health_condition === 'High BP'",
    "conditionHuman": "BMI == 'Underweight' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0120",
    "description": "BMI:Underweight AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "BMI == 'Underweight' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0121",
    "description": "BMI:Normal AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.health_condition === 'High BP'",
    "conditionHuman": "BMI == 'Normal' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0122",
    "description": "BMI:Normal AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "BMI == 'Normal' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0123",
    "description": "BMI:Overweight AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.health_condition === 'High BP'",
    "conditionHuman": "BMI == 'Overweight' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0124",
    "description": "BMI:Overweight AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "BMI == 'Overweight' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0125",
    "description": "BMI:Obese AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.health_condition === 'High BP'",
    "conditionHuman": "BMI == 'Obese' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0126",
    "description": "BMI:Obese AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "BMI == 'Obese' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Caution",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0127",
    "description": "BMI:Underweight AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "results.BMI_Category === 'Underweight' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "BMI == 'Underweight' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0128",
    "description": "BMI:Normal AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "results.BMI_Category === 'Normal' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "BMI == 'Normal' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0129",
    "description": "BMI:Overweight AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "results.BMI_Category === 'Overweight' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "BMI == 'Overweight' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0130",
    "description": "BMI:Obese AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "results.BMI_Category === 'Obese' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "BMI == 'Obese' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0131",
    "description": "goal:Maintain AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.goal === 'Maintain' && inputs.budget_level === 'Low'",
    "conditionHuman": "goal == 'Maintain' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0132",
    "description": "goal:Gain AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.goal === 'Gain' && inputs.budget_level === 'Low'",
    "conditionHuman": "goal == 'Gain' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0133",
    "description": "goal:Lose AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.goal === 'Lose' && inputs.budget_level === 'Low'",
    "conditionHuman": "goal == 'Lose' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0134",
    "description": "goal:Maintain AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Maintain' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "goal == 'Maintain' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0135",
    "description": "goal:Maintain AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Maintain' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "goal == 'Maintain' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0136",
    "description": "goal:Gain AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Gain' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "goal == 'Gain' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0137",
    "description": "goal:Gain AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Gain' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "goal == 'Gain' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0138",
    "description": "goal:Lose AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Lose' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "goal == 'Lose' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0139",
    "description": "goal:Lose AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.goal === 'Lose' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "goal == 'Lose' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0140",
    "description": "goal:Maintain AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Maintain' && inputs.health_condition === 'High BP'",
    "conditionHuman": "goal == 'Maintain' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0141",
    "description": "goal:Maintain AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Maintain' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "goal == 'Maintain' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0142",
    "description": "goal:Gain AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Gain' && inputs.health_condition === 'High BP'",
    "conditionHuman": "goal == 'Gain' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0143",
    "description": "goal:Gain AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Gain' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "goal == 'Gain' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0144",
    "description": "goal:Lose AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Lose' && inputs.health_condition === 'High BP'",
    "conditionHuman": "goal == 'Lose' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0145",
    "description": "goal:Lose AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.goal === 'Lose' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "goal == 'Lose' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0146",
    "description": "goal:Maintain AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.goal === 'Maintain' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "goal == 'Maintain' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0147",
    "description": "goal:Gain AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.goal === 'Gain' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "goal == 'Gain' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0148",
    "description": "goal:Lose AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.goal === 'Lose' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "goal == 'Lose' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0149",
    "description": "goal:Gain AND exercise_level:Active -> effects",
    "priority": 55,
    "conditionString": "inputs.goal === 'Gain' && inputs.exercise_level === 'Active'",
    "conditionHuman": "goal == 'Gain' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Calorie-Surplus"
    }
  },
  {
    "id": "R0150",
    "description": "goal:Lose AND exercise_level:Rarely -> effects",
    "priority": 55,
    "conditionString": "inputs.goal === 'Lose' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "goal == 'Lose' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Calorie-Deficit"
    }
  },
  {
    "id": "R0151",
    "description": "ageBracket:<25 AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.age < 25 && inputs.budget_level === 'Low'",
    "conditionHuman": "age < 25 AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0152",
    "description": "ageBracket:25-40 AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.budget_level === 'Low'",
    "conditionHuman": "age >= 25 AND age <= 40 AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0153",
    "description": "ageBracket:>40 AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.age > 40 && inputs.budget_level === 'Low'",
    "conditionHuman": "age > 40 AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0154",
    "description": "ageBracket:<25 AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.age < 25 && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "age < 25 AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0155",
    "description": "ageBracket:<25 AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.age < 25 && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "age < 25 AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0156",
    "description": "ageBracket:25-40 AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "age >= 25 AND age <= 40 AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0157",
    "description": "ageBracket:25-40 AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "age >= 25 AND age <= 40 AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0158",
    "description": "ageBracket:>40 AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.age > 40 && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "age > 40 AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0159",
    "description": "ageBracket:>40 AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.age > 40 && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "age > 40 AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0160",
    "description": "ageBracket:<25 AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.age < 25 && inputs.health_condition === 'High BP'",
    "conditionHuman": "age < 25 AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0161",
    "description": "ageBracket:<25 AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.age < 25 && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "age < 25 AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0162",
    "description": "ageBracket:25-40 AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.health_condition === 'High BP'",
    "conditionHuman": "age >= 25 AND age <= 40 AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0163",
    "description": "ageBracket:25-40 AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "age >= 25 AND age <= 40 AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0164",
    "description": "ageBracket:>40 AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.age > 40 && inputs.health_condition === 'High BP'",
    "conditionHuman": "age > 40 AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0165",
    "description": "ageBracket:>40 AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.age > 40 && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "age > 40 AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0166",
    "description": "ageBracket:<25 AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.age < 25 && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "age < 25 AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0167",
    "description": "ageBracket:25-40 AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "age >= 25 AND age <= 40 AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0168",
    "description": "ageBracket:>40 AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.age > 40 && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "age > 40 AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0169",
    "description": "stress_level:Low AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.stress_level === 'Low' && inputs.budget_level === 'Low'",
    "conditionHuman": "stress_level == 'Low' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0170",
    "description": "stress_level:Medium AND budget_level:Low -> effects",
    "priority": 60,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.budget_level === 'Low'",
    "conditionHuman": "stress_level == 'Medium' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0171",
    "description": "stress_level:High AND budget_level:Low -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'High' && inputs.budget_level === 'Low'",
    "conditionHuman": "stress_level == 'High' AND budget_level == 'Low'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Stress-Control"
    }
  },
  {
    "id": "R0172",
    "description": "stress_level:Low AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'Low' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "stress_level == 'Low' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0173",
    "description": "stress_level:Low AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'Low' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "stress_level == 'Low' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0174",
    "description": "stress_level:Medium AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "stress_level == 'Medium' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0175",
    "description": "stress_level:Medium AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "stress_level == 'Medium' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0176",
    "description": "stress_level:High AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0177",
    "description": "stress_level:High AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.stress_level === 'High' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "stress_level == 'High' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0178",
    "description": "stress_level:Low AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'Low' && inputs.health_condition === 'High BP'",
    "conditionHuman": "stress_level == 'Low' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0179",
    "description": "stress_level:Low AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'Low' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "stress_level == 'Low' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0180",
    "description": "stress_level:Medium AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.health_condition === 'High BP'",
    "conditionHuman": "stress_level == 'Medium' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0181",
    "description": "stress_level:Medium AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "stress_level == 'Medium' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0182",
    "description": "stress_level:High AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'High' && inputs.health_condition === 'High BP'",
    "conditionHuman": "stress_level == 'High' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0183",
    "description": "stress_level:High AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.stress_level === 'High' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "stress_level == 'High' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0184",
    "description": "stress_level:Low AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.stress_level === 'Low' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "stress_level == 'Low' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0185",
    "description": "stress_level:Medium AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.stress_level === 'Medium' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "stress_level == 'Medium' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0186",
    "description": "stress_level:High AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.stress_level === 'High' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "stress_level == 'High' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0187",
    "description": "budget_level:Low AND diet_restriction:None -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.diet_restriction === 'None'",
    "conditionHuman": "budget_level == 'Low' AND diet_restriction == 'None'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0188",
    "description": "budget_level:Low AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'Low' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "budget_level == 'Low' AND diet_restriction == 'Vegan'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0189",
    "description": "budget_level:Low AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'Low' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "budget_level == 'Low' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Food_Type": "Plant-Based",
      "Diet_Plan": "Plant-Based"
    }
  },
  {
    "id": "R0190",
    "description": "budget_level:Low AND diet_restriction:Allergy -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.diet_restriction === 'Allergy'",
    "conditionHuman": "budget_level == 'Low' AND diet_restriction == 'Allergy'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0191",
    "description": "budget_level:Medium AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "budget_level == 'Medium' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0192",
    "description": "budget_level:Medium AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "budget_level == 'Medium' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0193",
    "description": "budget_level:High AND diet_restriction:Vegan -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'High' && inputs.diet_restriction === 'Vegan'",
    "conditionHuman": "budget_level == 'High' AND diet_restriction == 'Vegan'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0194",
    "description": "budget_level:High AND diet_restriction:Vegetarian -> effects",
    "priority": 70,
    "conditionString": "inputs.budget_level === 'High' && inputs.diet_restriction === 'Vegetarian'",
    "conditionHuman": "budget_level == 'High' AND diet_restriction == 'Vegetarian'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0195",
    "description": "budget_level:Low AND health_condition:None -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.health_condition === 'None'",
    "conditionHuman": "budget_level == 'Low' AND health_condition == 'None'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0196",
    "description": "budget_level:Low AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'Low' && inputs.health_condition === 'High BP'",
    "conditionHuman": "budget_level == 'Low' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0197",
    "description": "budget_level:Low AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'Low' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "budget_level == 'Low' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0198",
    "description": "budget_level:Medium AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.health_condition === 'High BP'",
    "conditionHuman": "budget_level == 'Medium' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0199",
    "description": "budget_level:Medium AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "budget_level == 'Medium' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0200",
    "description": "budget_level:High AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'High' && inputs.health_condition === 'High BP'",
    "conditionHuman": "budget_level == 'High' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0201",
    "description": "budget_level:High AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.budget_level === 'High' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "budget_level == 'High' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0202",
    "description": "budget_level:Low AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.budget_level === 'Low' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "budget_level == 'Low' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0203",
    "description": "budget_level:Low AND cooking_facility:Shared Kitchen -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "budget_level == 'Low' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0204",
    "description": "budget_level:Low AND cooking_facility:Full Kitchen -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "budget_level == 'Low' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0205",
    "description": "budget_level:Medium AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "budget_level == 'Medium' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0206",
    "description": "budget_level:High AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.budget_level === 'High' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "budget_level == 'High' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0207",
    "description": "budget_level:Low AND exercise_level:Rarely -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "budget_level == 'Low' AND exercise_level == 'Rarely'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0208",
    "description": "budget_level:Low AND exercise_level:Moderate -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "budget_level == 'Low' AND exercise_level == 'Moderate'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0209",
    "description": "budget_level:Low AND exercise_level:Active -> effects",
    "priority": 60,
    "conditionString": "inputs.budget_level === 'Low' && inputs.exercise_level === 'Active'",
    "conditionHuman": "budget_level == 'Low' AND exercise_level == 'Active'",
    "effects": {
      "Food_Type": "Low-Budget Meals",
      "Diet_Plan": "Budget-Friendly"
    }
  },
  {
    "id": "R0210",
    "description": "diet_restriction:None AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.health_condition === 'High BP'",
    "conditionHuman": "diet_restriction == 'None' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0211",
    "description": "diet_restriction:None AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "diet_restriction == 'None' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0212",
    "description": "diet_restriction:Vegan AND health_condition:None -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.health_condition === 'None'",
    "conditionHuman": "diet_restriction == 'Vegan' AND health_condition == 'None'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0213",
    "description": "diet_restriction:Vegan AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.health_condition === 'High BP'",
    "conditionHuman": "diet_restriction == 'Vegan' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0214",
    "description": "diet_restriction:Vegan AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "diet_restriction == 'Vegan' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0215",
    "description": "diet_restriction:Vegetarian AND health_condition:None -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.health_condition === 'None'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND health_condition == 'None'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0216",
    "description": "diet_restriction:Vegetarian AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.health_condition === 'High BP'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0217",
    "description": "diet_restriction:Vegetarian AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0218",
    "description": "diet_restriction:Allergy AND health_condition:High BP -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.health_condition === 'High BP'",
    "conditionHuman": "diet_restriction == 'Allergy' AND health_condition == 'High BP'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0219",
    "description": "diet_restriction:Allergy AND health_condition:High Cholesterol -> effects",
    "priority": 95,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.health_condition === 'High Cholesterol'",
    "conditionHuman": "diet_restriction == 'Allergy' AND health_condition == 'High Cholesterol'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0220",
    "description": "diet_restriction:None AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.diet_restriction === 'None' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "diet_restriction == 'None' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0221",
    "description": "diet_restriction:Vegan AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0222",
    "description": "diet_restriction:Vegan AND cooking_facility:Shared Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0223",
    "description": "diet_restriction:Vegan AND cooking_facility:Full Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegan' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0224",
    "description": "diet_restriction:Vegetarian AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0225",
    "description": "diet_restriction:Vegetarian AND cooking_facility:Shared Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0226",
    "description": "diet_restriction:Vegetarian AND cooking_facility:Full Kitchen -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0227",
    "description": "diet_restriction:Allergy AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.diet_restriction === 'Allergy' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "diet_restriction == 'Allergy' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0228",
    "description": "diet_restriction:Vegan AND exercise_level:Rarely -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "diet_restriction == 'Vegan' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0229",
    "description": "diet_restriction:Vegan AND exercise_level:Moderate -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "diet_restriction == 'Vegan' AND exercise_level == 'Moderate'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0230",
    "description": "diet_restriction:Vegan AND exercise_level:Active -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegan' && inputs.exercise_level === 'Active'",
    "conditionHuman": "diet_restriction == 'Vegan' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0231",
    "description": "diet_restriction:Vegetarian AND exercise_level:Rarely -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND exercise_level == 'Rarely'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0232",
    "description": "diet_restriction:Vegetarian AND exercise_level:Moderate -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND exercise_level == 'Moderate'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0233",
    "description": "diet_restriction:Vegetarian AND exercise_level:Active -> effects",
    "priority": 70,
    "conditionString": "inputs.diet_restriction === 'Vegetarian' && inputs.exercise_level === 'Active'",
    "conditionHuman": "diet_restriction == 'Vegetarian' AND exercise_level == 'Active'",
    "effects": {
      "Diet_Plan": "Plant-Based",
      "Food_Type": "Plant-Based"
    }
  },
  {
    "id": "R0234",
    "description": "health_condition:None AND cooking_facility:No Kitchen -> effects",
    "priority": 85,
    "conditionString": "inputs.health_condition === 'None' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'None' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0235",
    "description": "health_condition:High BP AND cooking_facility:No Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0236",
    "description": "health_condition:High BP AND cooking_facility:Shared Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0237",
    "description": "health_condition:High BP AND cooking_facility:Full Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "health_condition == 'High BP' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0238",
    "description": "health_condition:High Cholesterol AND cooking_facility:No Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.cooking_facility === 'No Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND cooking_facility == 'No Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals",
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0239",
    "description": "health_condition:High Cholesterol AND cooking_facility:Shared Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.cooking_facility === 'Shared Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND cooking_facility == 'Shared Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0240",
    "description": "health_condition:High Cholesterol AND cooking_facility:Full Kitchen -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0241",
    "description": "health_condition:High BP AND exercise_level:Rarely -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High BP' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0242",
    "description": "health_condition:High BP AND exercise_level:Moderate -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "health_condition == 'High BP' AND exercise_level == 'Moderate'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0243",
    "description": "health_condition:High BP AND exercise_level:Active -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High BP' && inputs.exercise_level === 'Active'",
    "conditionHuman": "health_condition == 'High BP' AND exercise_level == 'Active'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0244",
    "description": "health_condition:High Cholesterol AND exercise_level:Rarely -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND exercise_level == 'Rarely'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0245",
    "description": "health_condition:High Cholesterol AND exercise_level:Moderate -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND exercise_level == 'Moderate'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0246",
    "description": "health_condition:High Cholesterol AND exercise_level:Active -> effects",
    "priority": 95,
    "conditionString": "inputs.health_condition === 'High Cholesterol' && inputs.exercise_level === 'Active'",
    "conditionHuman": "health_condition == 'High Cholesterol' AND exercise_level == 'Active'",
    "effects": {
      "Health_Advisory": "Consult Doctor",
      "Meal_Portion": "Small Frequent Meals"
    }
  },
  {
    "id": "R0247",
    "description": "cooking_facility:No Kitchen AND exercise_level:Rarely -> effects",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.exercise_level === 'Rarely'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND exercise_level == 'Rarely'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0248",
    "description": "cooking_facility:No Kitchen AND exercise_level:Moderate -> effects",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND exercise_level == 'Moderate'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0249",
    "description": "cooking_facility:No Kitchen AND exercise_level:Active -> effects",
    "priority": 85,
    "conditionString": "inputs.cooking_facility === 'No Kitchen' && inputs.exercise_level === 'Active'",
    "conditionHuman": "cooking_facility == 'No Kitchen' AND exercise_level == 'Active'",
    "effects": {
      "Food_Type": "No-Cook Meals"
    }
  },
  {
    "id": "R0250",
    "description": "stress medium -> Balanced",
    "priority": 20,
    "conditionString": "inputs.stress_level === 'Medium'",
    "conditionHuman": "stress_level == 'Medium'",
    "effects": {
      "Diet_Plan": "Balanced"
    }
  },
  {
    "id": "R0251",
    "description": "budget medium + exercise moderate -> Assorted",
    "priority": 20,
    "conditionString": "inputs.budget_level === 'Medium' && inputs.exercise_level === 'Moderate'",
    "conditionHuman": "budget_level == 'Medium' AND exercise_level == 'Moderate'",
    "effects": {
      "Food_Type": "Assorted"
    }
  },
  {
    "id": "R0252",
    "description": "age 25-40 + full kitchen -> variety meals",
    "priority": 25,
    "conditionString": "inputs.age >= 25 && inputs.age <= 40 && inputs.cooking_facility === 'Full Kitchen'",
    "conditionHuman": "age >= 25 AND age <= 40 AND cooking_facility == 'Full Kitchen'",
    "effects": {
      "Food_Type": "Variety of Healthy Meals"
    }
  }
];
