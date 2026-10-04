# AI Comparison Report

## 1. AI Models Used

- **Model 1:** LocalModel ( google/gemma-4-12b-qat)
- **Model 2:** Sonnet5

## 2. Prompt Used

> "Make a  responsible website  for my FDE company
"

## 3. Code Quality Observation

### Comparison Table

| Area | Model 1 | Model 2 |
|------|---------|---------|
| **Code structure** | Simple and easy to read, but it was not fully aligned to the project brief and often gave suggestions instead of actual implementation. | Better structured layout with clearer section flow and a more organized, usable single-page website. |
| **Reliability** | Lower reliability because it did not fully understand the company context and sometimes produced generic suggestions instead of final code. | More reliable because it understood that FDE referred to a company context and produced a more responsible, professional website design. |
| **Component design** | Basic design approach with fewer reusable sections and weaker alignment to the requested brand direction. | Cleaner visual grouping, stronger composition, and better overall presentation for a professional company website. |
| **Documentation** | Very little explanation or comments inside the code, and it did not provide a complete build when context was missing. | Slightly clearer and more coherent, with stronger output once the FDE context and HTML/CSS requirement were provided. |
| **Error handling** | No validation or fallback behavior; it often responded with ideas rather than working code. | Better awareness of layout and structure, with more practical implementation. |
| **Form interaction logic** | The AI claimed the form was functional, but the actual contact form only shows a success message without real backend handling or submission logic. | The form logic is more complete and includes basic validation, but it still does not connect to a real message service or backend. |
| **Understanding of requirements** | Poorer understanding of the task. It did not know what FDE meant, gave vague suggestions, and only produced actual code after being explicitly told to create HTML/CSS. | Better understanding of the project. It recognized the FDE context and created a more responsible, appropriate website for the company. |
| **Overall quality** | Acceptable only after repeated instruction; not fully dependable for this assignment. | Better polished result with stronger design, clearer structure, and better match to the requested company website. |

## 4. AI Hallucination Observation

This experiment shows that AI can appear confident even when it does not truly understand the task. In the website comparison, Model 1 did not properly understand what **FDE** meant and did not ask for clarification. Instead of creating a real company website, it gave general design suggestions and vague ideas. This shows a form of hallucination: the model generated a plausible response without enough factual grounding.

The same issue appeared in the mathematical example below:

- Calculation: `873,421 * 43,119`
- Correct answer: **37,661,040,099**
- AI answer: **37,662,043,399**

The AI answer is close to the correct result, but not exact. This suggests that the model was not actually computing the number correctly; it was guessing a result that looked realistic. This is a common hallucination pattern in AI systems, especially with large numbers or unfamiliar calculations.

A more practical example from this project is the contact form behavior. The AI told us that the code was "100% working," but the form shows a success message like "Thanks! Your message has been received. We'll be in touch soon" even though there is no real submission logic, no backend connection, and no actual email or database processing. The success message is just a static UI element, not a real working operation. This means the model gave a false impression of completion without validating the actual behavior.

This is especially important in web design tasks. If the AI does not understand the company name, industry, or project requirements, it can invent a generic solution that appears professional but is not actually based on real facts. For this reason, AI output must always be checked, corrected, and validated by a human.

After comparing both outputs, **Model 2** is the better choice because it produced a more polished, organized, and visually consistent single-page website. It has stronger structure, clearer presentation, and better overall quality. However, neither model is fully reliable for production use without human review and content verification.

### Key Considerations

- **Code quality:** Model 2 produced a more complete and visually polished single-page website, while Model 1 often gave ideas instead of final working code.
- **Accuracy:** Model 2 better understood the company context and the meaning of FDE, while Model 1 lacked that context and generated more generic, less accurate output.
- **Maintainability:** Model 2 created a cleaner structure that is easier to extend and edit later, whereas Model 1 was more limited and less adaptable.
- **Understanding of requirements:** Model 2 responded well after understanding the FDE business context and the requirement for HTML/CSS. Model 1 did not fully understand the brief and only produced actual code after repeated clarification.

### Final Recommendation

**Model 2 provides the better final answer for this project** because it showed stronger progression, better context understanding, and a more polished website structure. Model 1 was able to generate basic ideas, but it did not fully understand the FDE context and often produced generic suggestions instead of a complete, usable result. This shows that model quality is not only about the tool itself, but also about how clearly the prompt and project context are provided.

For this assignment, **Model 2 is the stronger choice** because it delivered a more professional and complete website. However, **Model 1 can still be useful for brainstorming and early drafts**, while the final product should always be reviewed and improved by a human to ensure accuracy and quality.
