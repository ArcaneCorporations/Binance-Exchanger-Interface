# Binance-Exchanger-Interface
Based on work from an earlier repository, this is an attempt to create a user interface for everyone to use the Binance Exchanger API.

# How to Login? #
A user must first create an account with binance (https://accounts.binance.com/en/register). By default, even a free membership will grant you the right to generate an API Key and a Secret Key specific to your account. This information is tied directly to your use of our binance exchanger interface and in fact serves as a primary means of authentication. For precise steps in creating your own keys, we recommend the following guide (https://faq.lukka.tech/en/articles/4785261-how-to-generate-api-keys-for-binance).

In the completely integrated version of our software, you can expect a login screen much like this, where you will be prompted to enter your keys in order, in order to login to your specific arcane account. Note that since you go through the process of creating your own keys, we can feasibly have no knolwedge of them and therefore your information remains private with you, for the sake of a truly trustless and private service.

![part1.png](https://github.com/ArcaneCorporations/Binance-Exchanger-Interface/blob/main/screenshots/ss1.png)


# How to Use #
Upon signing in, you will be met with the following main screen, which outlines your signup credentials (your keys, in other words), and a simple interface to choose which cryptocurrencies you would like to exchange. The program will fetch live rates between the selected currencies to notify you in advance of approximately how much of one to another cryptocoin you can expect to trade in your order.

![part2.png](https://github.com/ArcaneCorporations/Binance-Exchanger-Interface/blob/main/screenshots/ss2.png)

If in doubt as to the functionality of the application, there exists an option to 'Check Connectivity', which will notify you by alert whether the binance exchanger service is operational at any given moment in time. Also, do note that while the prices are live, they are still subject to fluctuation. If you desire an even more precise estimate, you are advised and encouraged to sign in to your binance account and inspect the data yourself.
