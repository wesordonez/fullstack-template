from rest_framework import serializers

class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    message = serializers.CharField(max_length=2000) 