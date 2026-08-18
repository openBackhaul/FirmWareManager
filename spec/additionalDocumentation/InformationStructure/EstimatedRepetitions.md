# Estimated Number of Repetitions of the most Relevant Operations

The following operations must be executed efficiently and fast.  

## Measurement

The information about the device is updated in OperationalDS.  
To be executed with new information being available from the network.  

Design decision:  

- The input interface of the DPMDP is re-used.

This results in a frequency of 320,000 devices/day.  

## Monitoring

Alarm list must be updated based on differences between RunningDS and OperationalDS.  

Design decisions:  

- Comparison is done in two approaches:
  - Reactive Approach:
    - Comparison is triggered by changes in either OperationalDS or RunningDS.
    - Comparison is limited to changed devices
  - Comprehensive Approach:
    - Comparison is triggered by time (Pulser).
    - Comparison is done for all devices in the OperationalDS.  

Re-use of the DPMDP input interface and sporadic input results in a frequency of 324,000 devices/day.  

## Validation

The firmware in the CandidateDS must be validated against the approvals.  
This includes checking for compatibility with the actual hardware of the devices before transferring to RunningDS.  

Changing the device group of a device requires to at least validate this device (administrative event).  
Changing the firmware at a device group requires to at least validate all devices in this group (operational event).  

Assumptions:  

- 50 administrative events/day  
- 4 operational events/year  
- administrative events affect a single device only  
- operational events affect 15,000 devices  

Design decisions:  

- In case of an administrative event, only the affected devices are validated.  
- In case of an operational event, all devices are validated (not just the ones in the affected group).  

This requires 50 devices/day and 160,000 devices/year, which results in 550 devices/day.  
