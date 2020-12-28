---
title: "Satellite Telemetry Decoder"
excerpt: "<img src='/images/IS_decoder.jpg'>"
collection: portfolio
---

In order to analyse the data from the payload at a later stage a software was
required that can convert raw files to human readable telemetry. In order to do so a
python application was developed which can take the raw file, implement the telemetry
conversions and then transfer them into a excel (.csv) file. The python script first
converts the packets into a level-0 telemetry files which contain multiple columns with
the raw bytes of the packet. In order to implement required telemetry conversions,
the user must provide the application with the details of the packet structure and the
conversions. The software then performs necessary telemetry conversions and generates
level-1 telemetry files with human readable telemetry values. The flowchart
shown below explains this procedure in a graphical manner:
<br/><img src='/images/IS_decoder.jpg'>

A GUI(Graphical User Interface) was also developed for the application as shown
below, which makes it easy for the user to covert raw data packets for analysis:
<br/><img src='/images/decoder_GUI.PNG'>

The software was developed with a modular design so that it can be extended
to decode telemetry for other small satellite missions. The telemetry decoding 
application can be found at the following repository: [INSPIRESat-1 Telemetry Decoder](https:
//github.com/anant-infinity/IS1_Temeletry_Decoding.git).