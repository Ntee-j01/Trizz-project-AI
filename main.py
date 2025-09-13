from openai import OpenAI

# Initialize the OpenAI client with your API key
client = OpenAI(api_key="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")  # replace with your key

def run():
    try:
        response = client.responses.create(
            model="gpt-5",
            input="Write a short bedtime story about a unicorn."
        )
        print(response.output_text)
    except Exception as e:
        print("Error calling OpenAI API:", e)

if __name__ == "__main__":
    run()
