# Third Party Risk Assessment with watsonx.ai

## What is this?

The Third Party Risk team within a financial institution completes over 1000 vendor assessments per year as a part of their ongoing due diligence to vet the institution's third party partners. Each assessment takes about 45 working hours to complete and is driven largely by manual evaluation of documentation, including internal policies, vendor policies, and responses on risk questionnaires. The goal of this solution is to leverage wxai to facilitate the third party vendor risk assesment process within a financial institution.


## How do I use it?

1. Generate a reference SIG

   Use (create_reference_SIG.py)[assets/watsonxai-solution/create_reference_SIG.py] to create a csv with appropriate answers and relevant context from a a cybersecurity standards document. In this case we are using a standards document from the Univerity of Maryland System, and a blank SIG from Shared Assessments.

2. Generate a synthetic SIG

   In lieu of a real, vendor completed SIG, use (create_synthetic_SIG.py)[assets/watsonxai-solution/create_synthetic_SIG.py] to create a fake completed SIG with two mutable parameters. The issue rate corresponds to the proportion of questions that will have "incorrect" answers, and the gap rate will determine how many responses will turn out to be gaps. A gap is a question that is either answered "correctly" but with additional information that is potentially an issue for the assessing firm, or a question that is answered "incorrectly" but with additional information that could justify the errant response. The additional information for this synthetic SIG would be generated using AI.

3. Generate the assessor response

   Use (create_assessor_report.py)[assets/watsonxai-solution/create_synthetic_SIG.py] to run the AI-based vendor assessment on the SIG (either generated from step 2 or from another source).


