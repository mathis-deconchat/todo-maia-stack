FROM postgres:14
RUN apt-get update
COPY init.sql /docker-entrypoint-initdb.d/ 
RUN apt-get install git build-essential postgresql-server-dev-14 -y
RUN git clone https://github.com/eulerto/wal2json.git
RUN export PATH=/usr/lib/postgresql/14/bin:$PATH
WORKDIR ./wal2json
RUN USE_PGXS=1 make
RUN USE_PGXS=1 make install


