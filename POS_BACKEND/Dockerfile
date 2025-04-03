FROM ubuntu:24.04

RUN apt update -y
RUN apt install -y python3 python3-pip
RUN apt full-upgrade -y
RUN apt install neovim -y

WORKDIR /code
COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt --break-system-packages
# Copy files to /code, not /code/app
COPY . /code/

EXPOSE 8000

# Run main.py directly from /code
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
